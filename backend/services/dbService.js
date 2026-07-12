import { prisma } from '../config/db.js';

export class DbService {
  static async getAll(entity) {
    return prisma[entity].findMany();
  }

  static async getById(entity, id) {
    return prisma[entity].findUnique({
      where: { id: Number(id) }
    });
  }

  static async create(entity, data) {
    return prisma[entity].create({ data });
  }

  static async update(entity, id, data) {
    return prisma[entity].update({
      where: { id: Number(id) },
      data
    });
  }

  static async delete(entity, id) {
    return prisma[entity].delete({
      where: { id: Number(id) }
    });
  }

  static async count(entity) {
    return prisma[entity].count();
  }

  static async bulkSync(entity, items) {
    return prisma.$transaction(async (tx) => {
      const ids = items.map(x => x.id).filter(id => id !== undefined && id !== null);
      
      // Delete items no longer in the array
      await tx[entity].deleteMany({
        where: {
          NOT: {
            id: { in: ids }
          }
        }
      });

      // If syncing arbitres, also delete the associated users
      if (entity === 'arbitre') {
        await tx.user.deleteMany({
          where: {
            role: 'ref',
            refId: {
              notIn: ids
            }
          }
        });
      }

      // Upsert items
      for (const item of items) {
        const { id, ...data } = item;
        let savedItem;
        if (id === undefined || id === null) {
          savedItem = await tx[entity].create({ data });
        } else {
          savedItem = await tx[entity].upsert({
            where: { id },
            update: data,
            create: { id, ...data }
          });
        }

        // If syncing arbitres, automatically create/update the User profile
        if (entity === 'arbitre') {
          const arbId = savedItem.id;
          const email = savedItem.email && savedItem.email.trim()
            ? savedItem.email.trim().toLowerCase()
            : `ref_${arbId}@fdf.dj`;
          const code = savedItem.licence && savedItem.licence.trim()
            ? savedItem.licence.trim()
            : '5678';
          const name = `${savedItem.prenom || ''} ${savedItem.nom || ''}`.trim() || 'Arbitre';

          // Check if user already exists for this arbitre
          const existingUser = await tx.user.findFirst({
            where: {
              role: 'ref',
              refId: arbId
            }
          });

          if (existingUser) {
            // Update user details to sync with Arbitre changes
            await tx.user.update({
              where: { id: existingUser.id },
              data: {
                email,
                name,
                code
              }
            });
          } else {
            // Check if this email is already taken by another user to avoid unique constraints
            const emailTaken = await tx.user.findUnique({
              where: { email }
            });
            const finalEmail = emailTaken ? `ref_${arbId}_${Date.now()}@fdf.dj` : email;

            // Create new User
            await tx.user.create({
              data: {
                email: finalEmail,
                name,
                code,
                role: 'ref',
                refId: arbId
              }
            });
          }
        }
      }
    });
  }
}

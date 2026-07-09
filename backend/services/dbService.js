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

      // Upsert items
      for (const item of items) {
        const { id, ...data } = item;
        if (id === undefined || id === null) {
          await tx[entity].create({ data });
        } else {
          await tx[entity].upsert({
            where: { id },
            update: data,
            create: { id, ...data }
          });
        }
      }
    });
  }
}

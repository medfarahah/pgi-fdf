import { DbService } from '../services/dbService.js';
import { getDemoData } from '../../src/demoData.js';
import { prisma } from '../config/db.js';

const entities = [
  { name: 'club', path: 'clubs' },
  { name: 'arbitre', path: 'arbitres' },
  { name: 'saison', path: 'saisons' },
  { name: 'division', path: 'divisions' },
  { name: 'competition', path: 'competitions' },
  { name: 'taux', path: 'taux' },
  { name: 'sanction', path: 'sanctions' },
  { name: 'match', path: 'matchs' },
  { name: 'feuilleMatch', path: 'feuilles' },
  { name: 'presenceArbitre', path: 'presences' },
  { name: 'sanctionAppliquee', path: 'sancapp' },
  { name: 'confirmationPresence', path: 'refconfirmations' },
  { name: 'rapportArbitre', path: 'rapports' },
  { name: 'user', path: 'users' }
];

async function ensureSeed() {
  try {
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      await prisma.user.createMany({
        data: [
          {
            email: 'assign@fdf.dj',
            name: 'Responsable Assignation',
            code: '4321',
            role: 'assign'
          },
          {
            email: 'compta@fdf.dj',
            name: 'Responsable Comptabilité',
            code: '1234',
            role: 'compta'
          },
          {
            email: 'ahmed.hassan@fdf.dj',
            name: 'Ahmed Hassan',
            code: '5678',
            role: 'ref',
            refId: 1
          }
        ]
      });
      console.log('Default users seeded successfully.');
    }
  } catch (err) {
    console.error('Error seeding default users:', err);
  }
}

export class DbController {
  static async bootstrap(req, res, next) {
    try {
      await ensureSeed();
      const data = {};
      for (const ent of entities) {
        data[ent.path] = await DbService.getAll(ent.name);
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  static getHandler(entityName) {
    return async (req, res, next) => {
      try {
        await ensureSeed();
        const items = await DbService.getAll(entityName);
        res.json(items);
      } catch (err) {
        next(err);
      }
    };
  }

  static getByIdHandler(entityName) {
    return async (req, res, next) => {
      try {
        const item = await DbService.getById(entityName, req.params.id);
        if (!item) {
          return res.status(404).json({ error: "Item not found" });
        }
        res.json(item);
      } catch (err) {
        next(err);
      }
    };
  }

  static createHandler(entityName) {
    return async (req, res, next) => {
      try {
        const item = await DbService.create(entityName, req.body);
        res.status(201).json(item);
      } catch (err) {
        next(err);
      }
    };
  }

  static updateHandler(entityName) {
    return async (req, res, next) => {
      try {
        const item = await DbService.update(entityName, req.params.id, req.body);
        res.json(item);
      } catch (err) {
        next(err);
      }
    };
  }

  static deleteHandler(entityName) {
    return async (req, res, next) => {
      try {
        await DbService.delete(entityName, req.params.id);
        res.status(204).end();
      } catch (err) {
        next(err);
      }
    };
  }

  static bulkSyncHandler(entityName) {
    return async (req, res, next) => {
      try {
        const items = req.body;
        if (!Array.isArray(items)) {
          return res.status(400).json({ error: "Expected an array of items" });
        }
        await DbService.bulkSync(entityName, items);
        const updated = await DbService.getAll(entityName);
        res.json(updated);
      } catch (err) {
        next(err);
      }
    };
  }

  static async login(req, res, next) {
    try {
      const { code } = req.body;
      if (!code) {
        return res.status(400).json({ error: "Code d'accès ou N° de licence requis" });
      }

      const trimmedCode = code.trim();

      // 1. Try to find a user by their direct code (e.g. for assign/compta or custom code)
      let user = await prisma.user.findFirst({
        where: {
          code: trimmedCode
        }
      });

      // 2. If not found by code, check if it's an arbitre licence number
      if (!user) {
        const arbitre = await prisma.arbitre.findFirst({
          where: {
            licence: {
              equals: trimmedCode,
              mode: 'insensitive'
            }
          }
        });

        if (arbitre) {
          user = await prisma.user.findFirst({
            where: {
              role: 'ref',
              refId: arbitre.id
            }
          });
        }
      }

      if (!user) {
        return res.status(401).json({ error: "Code d'accès ou N° de licence incorrect" });
      }

      res.json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        refId: user.refId
      });
    } catch (err) {
      next(err);
    }
  }
}
export { entities };

import { DbService } from '../services/dbService.js';
import { getDemoData } from '../../src/demoData.js';

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
  { name: 'rapportArbitre', path: 'rapports' }
];

async function ensureSeed() {
  // Seeding disabled to use real database data
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
}
export { entities };

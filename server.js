import express from 'express';
import cors from 'cors';
import { getDemoData } from './src/demoData.js';
import dotenv from 'dotenv';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from './src/generated/prisma/index.js';

dotenv.config();

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });
const app = express();
app.use(cors());
app.use(express.json());

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

// Helper to seed demo data if database is empty
async function ensureSeed() {
  const count = await prisma.club.count();
  if (count === 0) {
    console.log("Database is empty. Seeding demo data...");
    const demo = getDemoData();
    await prisma.$transaction(async (tx) => {
      // Seed each table
      for (const club of demo.clubs) {
        await tx.club.create({ data: club });
      }
      for (const arb of demo.arbitres) {
        await tx.arbitre.create({ data: arb });
      }
      for (const sais of demo.saisons) {
        await tx.saison.create({ data: sais });
      }
      for (const div of demo.divisions) {
        await tx.division.create({ data: div });
      }
      for (const comp of demo.competitions) {
        await tx.competition.create({ data: comp });
      }
      for (const t of demo.taux) {
        await tx.taux.create({ data: t });
      }
      for (const sanc of demo.sanctions) {
        await tx.sanction.create({ data: sanc });
      }
      for (const m of demo.matchs) {
        await tx.match.create({ data: m });
      }
      for (const f of demo.feuilles) {
        await tx.feuilleMatch.create({ data: f });
      }
      for (const p of demo.presences) {
        await tx.presenceArbitre.create({ data: p });
      }
      for (const sa of demo.sancApp) {
        await tx.sanctionAppliquee.create({ data: sa });
      }
      for (const rc of demo.refConfirmations) {
        await tx.confirmationPresence.create({ data: rc });
      }
      for (const rap of demo.rapports) {
        await tx.rapportArbitre.create({ data: rap });
      }
    });
    console.log("Seeding complete!");
  }
}

// Global bootstrap route to fetch all data in a single request
app.get('/api/bootstrap', async (req, res) => {
  try {
    await ensureSeed();
    const data = {};
    for (const ent of entities) {
      data[ent.path] = await prisma[ent.name].findMany();
    }
    res.json(data);
  } catch (err) {
    console.error("Error bootstrapping data:", err);
    res.status(500).json({ error: err.message });
  }
});

// Set up CRUD routes for each entity
entities.forEach(ent => {
  // GET all items
  app.get(`/api/${ent.path}`, async (req, res) => {
    try {
      await ensureSeed();
      const items = await prisma[ent.name].findMany();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // PUT (sync full array)
  app.put(`/api/${ent.path}`, async (req, res) => {
    try {
      const items = req.body;
      if (!Array.isArray(items)) {
        return res.status(400).json({ error: "Expected an array of items" });
      }

      await prisma.$transaction(async (tx) => {
        // Delete items no longer in the array
        const ids = items.map(x => x.id).filter(id => id !== undefined && id !== null);
        await tx[ent.name].deleteMany({
          where: {
            NOT: {
              id: { in: ids }
            }
          }
        });

        // Upsert items in the array
        for (const item of items) {
          const { id, ...data } = item;
          if (id === undefined || id === null) {
            await tx[ent.name].create({ data });
          } else {
            await tx[ent.name].upsert({
              where: { id },
              update: data,
              create: { id, ...data }
            });
          }
        }
      });

      const updated = await prisma[ent.name].findMany();
      res.json(updated);
    } catch (err) {
      console.error(`Error syncing ${ent.path}:`, err);
      res.status(500).json({ error: err.message });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

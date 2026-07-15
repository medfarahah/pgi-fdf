import express from 'express';
import { DbController, entities } from '../controllers/dbController.js';

const router = express.Router();

// Bootstrap endpoint
router.get('/bootstrap', DbController.bootstrap);

// Login endpoint
router.post('/login', DbController.login);

// Password change endpoint
router.post('/users/change-password', DbController.changePassword);

// Granular and bulk routes for all entities
entities.forEach(ent => {
  // Sync arrays in bulk (used by the react app hook useLS)
  router.put(`/${ent.path}`, DbController.bulkSyncHandler(ent.name));

  // standard REST endpoints
  router.get(`/${ent.path}`, DbController.getHandler(ent.name));
  router.get(`/${ent.path}/:id`, DbController.getByIdHandler(ent.name));
  router.post(`/${ent.path}`, DbController.createHandler(ent.name));
  router.put(`/${ent.path}/:id`, DbController.updateHandler(ent.name));
  router.delete(`/${ent.path}/:id`, DbController.deleteHandler(ent.name));
});

export default router;

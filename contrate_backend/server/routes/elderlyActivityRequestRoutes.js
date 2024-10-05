import express from 'express';
import { authenticateElderly } from '../middleware/elderlyAuth.js';
import { authorizeElderlyActivityRequest } from "../middleware/elderlyRequestAuth.js"
import { manageActivityRequest } from '../controllers/pedidoAtividadeController.js';

const elderlyActivityRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyActivityRequestRouter.put('/elderly/manage-activity-request/:requestId', authenticateElderly, authorizeElderlyActivityRequest, manageActivityRequest);

export default elderlyActivityRequestRouter;

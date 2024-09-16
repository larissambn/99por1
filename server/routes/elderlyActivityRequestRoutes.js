import express from 'express';
import { authenticateElderly } from '../middleware/elderlyAuth';
import { authorizeElderlyActivityRequest } from "../middleware/elderlyRequestAuth"
import { manageActivityRequest } from '../controllers/pedidoAtividadeController';

const elderlyActivityRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyActivityRequestRouter.put('/elderly/manage-activity-request/:requestId', authenticateElderly, authorizeElderlyActivityRequest, manageActivityRequest);

export default elderlyActivityRequestRouter;

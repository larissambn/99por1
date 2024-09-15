import express from 'express';
import { authenticateUser } from '../middleware/userAuth';
import { authorizeElderlyAcitvityRequest } from "../middleware/elderlyRequestAuth"
import { manageActivityRequest } from '../controllers/pedidoAtividadeController';

const elderlyActivityRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyActivityRequestRouter.put('/elderly/manage-activity-request/:requestId', authenticateUser, authorizeElderlyAcitvityRequest, manageActivityRequest);

export default elderlyActivityRequestRouter;

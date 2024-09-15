import express from 'express';
import { authenticateUser } from '../middleware/userAuth';
import { authorizeElderlyServiceRequest } from "../middleware/elderlyRequestAuth"
import { manageServiceRequest } from '../controllers/pedidoServiçoController';

const elderlyServiceRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyServiceRequestRouter.put('/elderly/manage-service-request/:requestId', authenticateUser, authorizeElderlyServiceRequest, manageServiceRequest);

export default elderlyServiceRequestRouter;

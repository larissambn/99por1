import express from 'express';
import { authenticateElderly } from '../middleware/elderlyAuth';
import { authorizeElderlyServiceRequest } from "../middleware/elderlyRequestAuth"
import { manageServiceRequest } from '../controllers/pedidoServiçoController';

const elderlyServiceRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyServiceRequestRouter.put('/elderly/manage-service-request/:requestId', authenticateElderly, authorizeElderlyServiceRequest, manageServiceRequest);

export default elderlyServiceRequestRouter;

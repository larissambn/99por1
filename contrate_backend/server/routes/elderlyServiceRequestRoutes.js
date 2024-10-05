import express from 'express';
import { authenticateElderly } from '../middleware/elderlyAuth.js';
import { authorizeElderlyServiceRequest } from "../middleware/elderlyRequestAuth.js"
import { manageServiceRequest } from '../controllers/pedidoServiçoController.js';

const elderlyServiceRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyServiceRequestRouter.put('/elderly/manage-service-request/:requestId', authenticateElderly, authorizeElderlyServiceRequest, manageServiceRequest);

export default elderlyServiceRequestRouter;

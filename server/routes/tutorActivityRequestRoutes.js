import express from 'express';
import { manageServiceRequest } from '../controllers/pedidoServiçoController';
import { authenticateUser } from '../middleware/userAuth';
import { authorizeTutorServiceRequest } from '../middleware/tutorRequestAuth';

const tutorServiceRequestRouter = express.Router();

// Route for the tutor to accept or deny a service request for an elderly person
tutorServiceRequestRouter.put('/tutor/manage-service-request/:requestId', authenticateUser, authorizeTutorServiceRequest, manageServiceRequest);

export default tutorServiceRequestRouter;

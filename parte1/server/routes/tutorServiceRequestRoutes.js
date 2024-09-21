import express from 'express';
import { manageServiceRequest } from '../controllers/pedidoServiçoController.js';
import { authenticateTutor } from '../middleware/tutorAuth.js';
import { authorizeTutorServiceRequest } from '../middleware/tutorRequestAuth.js';

const tutorServiceRequestRouter = express.Router();

// Route for the tutor to accept or deny a service request for an elderly person
tutorServiceRequestRouter.put('/tutor/manage-service-request/:requestId', authenticateTutor, authorizeTutorServiceRequest, manageServiceRequest);

export default tutorServiceRequestRouter;

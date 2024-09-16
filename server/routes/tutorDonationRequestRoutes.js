import express from 'express';
import { manageDonationRequest } from '../controllers/pedidoDoaçãoController';
import { authenticateTutor } from '../middleware/tutorAuth';
import { authorizeTutorDonationRequest } from '../middleware/tutorRequestAuth';

const tutorDonationRequestRouter = express.Router();

// Route for the tutor to accept or deny a service request for an elderly person
tutorDonationRequestRouter.put('/tutor/manage-donation-request/:requestId', authenticateTutor, authorizeTutorDonationRequest, manageDonationRequest);

export default tutorDonationRequestRouter;

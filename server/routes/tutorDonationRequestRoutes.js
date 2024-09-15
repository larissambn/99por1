import express from 'express';
import { manageDonationRequest } from '../controllers/pedidoDoaçãoController';
import { authenticateUser } from '../middleware/userAuth';
import { authorizeTutorDonationRequest } from '../middleware/tutorRequestAuth';

const tutorDonationRequestRouter = express.Router();

// Route for the tutor to accept or deny a service request for an elderly person
tutorDonationRequestRouter.put('/tutor/manage-donation-request/:requestId', authenticateUser, authorizeTutorDonationRequest, manageDonationRequest);

export default tutorDonationRequestRouter;

import express from 'express';
import { authenticateUser } from '../middleware/userAuth';
import { authorizeElderlyDonationRequest } from "../middleware/elderlyRequestAuth"
import { manageDonationRequest } from '../controllers/pedidoDoaçãoController';

const elderlyDonationRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyDonationRequestRouter.put('/elderly/manage-donation-request/:requestId', authenticateUser, authorizeElderlyDonationRequest, manageDonationRequest);

export default elderlyDonationRequestRouter;

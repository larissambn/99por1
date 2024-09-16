import express from 'express';
import { authenticateElderly } from '../middleware/elderlyAuth';
import { authorizeElderlyDonationRequest } from "../middleware/elderlyRequestAuth"
import { manageDonationRequest } from '../controllers/pedidoDoaçãoController';

const elderlyDonationRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyDonationRequestRouter.put('/elderly/manage-donation-request/:requestId', authenticateElderly, authorizeElderlyDonationRequest, manageDonationRequest);

export default elderlyDonationRequestRouter;

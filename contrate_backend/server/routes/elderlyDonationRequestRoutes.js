import express from 'express';
import { authenticateElderly } from '../middleware/elderlyAuth.js';
import { authorizeElderlyDonationRequest } from "../middleware/elderlyRequestAuth.js"
import { manageDonationRequest } from '../controllers/pedidoDoaçãoController.js';

const elderlyDonationRequestRouter = express.Router();

// Route for the elderly to accept or deny a service request
elderlyDonationRequestRouter.put('/elderly/manage-donation-request/:requestId', authenticateElderly, authorizeElderlyDonationRequest, manageDonationRequest);

export default elderlyDonationRequestRouter;

import express from 'express';
import { manageActivityRequest } from '../controllers/pedidoAtividadeController';
import { authenticateTutor } from '../middleware/tutorAuth';
import { authorizeTutorActivityRequest } from '../middleware/tutorRequestAuth';

const tutorActivityRequestRouter = express.Router();

// Route for the tutor to accept or deny a Activity request for an elderly person
tutorActivityRequestRouter.put('/tutor/manage-activity-request/:requestId', authenticateTutor, authorizeTutorActivityRequest, manageActivityRequest);

export default tutorActivityRequestRouter;

import express from 'express';
import { tutorManageServiceRequest } from '../controllers/serviceRequestController';
import { authenticateUser, authorizeTutor } from '../middleware/auth';

const router = express.Router();

// Route for the tutor to accept or deny a service request for an elderly person
router.put('/tutor/manage-request/:requestId', authenticateUser, authorizeTutor, tutorManageServiceRequest);

export default router;

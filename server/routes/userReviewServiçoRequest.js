import express from 'express';
import { submitServiceReview } from '../controllers/reviewController';
import { authenticateUser } from '../middleware/authElderly'; // Assuming same auth is used for users

const router = express.Router();

// Route to submit a review for a service
router.post('/service/:serviceId/review', authenticateUser, submitServiceReview);

export default router;

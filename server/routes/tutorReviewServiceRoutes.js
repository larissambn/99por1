import express from 'express';
import { submitServiceReview } from '../controllers/reviewSController.js';
import { authenticateTutor } from '../middleware/tutorAuth.js'; // Authentication middleware
import { authorizeTutorReviewService } from '../middleware/authTutorReview.js';

const tutorReviewRouter = express.Router();

// Route for the elderly to submit a review after the service is finished
tutorReviewRouter.post('/services/:serviceId/tutor-review', authenticateTutor,authorizeTutorReviewService, submitServiceReview);

export default tutorReviewRouter;

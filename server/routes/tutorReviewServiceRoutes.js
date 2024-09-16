import express from 'express';
import { tutorSubmitReview } from '../controllers/tutorReviewServiçoController';
import { authenticateTutor } from '../middleware/tutorAuth'; // Authentication middleware
import { authorizeTutorReviewService } from '../middleware/authTutorReview';

const tutorReviewRouter = express.Router();

// Route for the elderly to submit a review after the service is finished
tutorReviewRouter.post('/services/:serviceId/tutor-review', authenticateTutor,authorizeTutorReviewService, tutorSubmitReview);

export default tutorReviewRouter;

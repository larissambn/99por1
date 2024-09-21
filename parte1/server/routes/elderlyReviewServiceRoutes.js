import express from 'express';
import { submitServiceReview } from "../controllers/reviewSController.js";
import { authenticateElderly } from '../middleware/elderlyAuth.js'; // Authentication middleware
import { authorizeElderlyToReview } from "../middleware/authElderlyReview.js"

const elderlyReviewrouter = express.Router();

// Route for the elderly to submit a review after the service is finished
elderlyReviewrouter.post('/services/:serviceId/elderly-review', authenticateElderly, authorizeElderlyToReview, submitServiceReview);

export default elderlyReviewrouter;

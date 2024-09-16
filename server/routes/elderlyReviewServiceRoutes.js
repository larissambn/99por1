import express from 'express';
import { elderlySubmitReview } from '../controllers/elderlyReviewServiçoController';
import { authenticateElderly } from '../middleware/elderlyAuth'; // Authentication middleware
import { authorizeElderlyToReview } from "../middleware/authElderlyReview"

const elderlyReviewrouter = express.Router();

// Route for the elderly to submit a review after the service is finished
elderlyReviewrouter.post('/services/:serviceId/elderly-review', authenticateElderly, authorizeElderlyToReview, elderlySubmitReview);

export default elderlyReviewrouter;

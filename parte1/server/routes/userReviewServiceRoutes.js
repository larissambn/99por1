import express from 'express';
import { submitServiceReview } from '../controllers/userReviewServiçoController.js';
import { authenticateUser } from '../middleware/userAuth.js'; // Assuming same auth is used for users

const userReviewServiçoRouter = express.Router();

// Route to submit a review for a service
userReviewServiçoRouter.post('/service/:serviceId/user-review', authenticateUser, submitServiceReview);

export default userReviewServiçoRouter;

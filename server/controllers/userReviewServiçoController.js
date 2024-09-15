import ServiceReview from '../models/ServiceReview';
import ServiceRequest from '../models/ServiceRequest';
import Service from '../models/Service';
import { Op } from 'sequelize';

// Controller to submit a review for the elderly service
export const submitServiceReview = async (req, res) => {
  const { serviceId } = req.params; // Service ID being reviewed
  const { rating_elderly, comment_elderly, rating_user, comment_user } = req.body; // Review details
  const userId = req.user.id; // Logged-in user's ID (from authentication middleware)

  try {
    // Check if the service exists and has been completed
    const serviceRequest = await ServiceRequest.findOne({
      where: {
        service_id: serviceId,
        user_id: userId,
        status: 'Finished', // Service must be finished to allow reviews
      },
      include: [{ model: Service }]
    });

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service not found or not completed yet.' });
    }

    // Check if the user has already submitted a review for this service
    const existingReview = await ServiceReview.findOne({
      where: {
        service_id: serviceId,
        user_id: userId,
      }
    });

    if (existingReview) {
      return res.status(400).json({ message: 'You have already submitted a review for this service.' });
    }

    // Create a new review
    const newReview = await ServiceReview.create({
      service_id: serviceId,
      user_id: userId,
      rating_elderly,
      comment_elderly,
      rating_user,
      comment_user,
    });

    return res.status(201).json({ message: 'Review submitted successfully!', review: newReview });

  } catch (error) {
    return res.status(500).json({ message: 'Error submitting review', error });
  }
};

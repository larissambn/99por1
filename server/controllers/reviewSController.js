import ServiceRequest from '../models/ServiceRequest';
import ServiceReview from '../models/ServiceReview';
import Elderly from '../models/usuários/elderly';

// Controller for elderly to review the user
export const submitServiceReview = async (req, res) => {
  const { serviceId } = req.params;
  const { rating_user, comment_user } = req.body;

  try {
    // Find the service request
    const serviceRequest = await ServiceRequest.findOne({
      where: {
        service_id: serviceId,
        status: 'Finished', // Ensure the service was completed
      },
      include: [{ model: Elderly }]
    });

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service not found or not finished' });
    }

    // Check if the rating is valid
    if (rating_user < 0 || rating_user > 5) {
      return res.status(400).json({ message: 'Rating must be between 0 and 5' });
    }

    // Create the review
    const newReview = await ServiceReview.create({
      service_id: serviceId,
      rating_user,       // Rating given by the elderly for the user
      comment_user,      // Optional comment from elderly
      user_id: serviceRequest.user_id, // The user who requested the service
      rating_elderly: 0, // Initialize with 0, user will rate elderly later
      comment_elderly: null // Initialize with null
    });

    return res.status(201).json({ message: 'Review submitted successfully', newReview });
  } catch (error) {
    return res.status(500).json({ message: 'Error submitting review', error });
  }
};

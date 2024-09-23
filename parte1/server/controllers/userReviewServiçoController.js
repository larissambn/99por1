import ServiceReview from '../models/avaliação/avaliacaoServiço.js';
import ServiceRequest from '../models/pedidos/pedidoServiço.js';

// Controller to submit a review for the elderly service
export const userSubmitServiceReview = async (req, res) => {
  const { serviceId } = req.params; 
  const { rating_elderly, comment_elderly, rating_user, comment_user } = req.body; 
  const userId = req.user.id; 

  try {
    // Check if the service exists and has been completed
    const serviceRequest = await ServiceRequest.findOne({
      service_id: serviceId,
      user_id: userId,
      status: 'Finished', 
    }).populate('service');

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service not found or not completed yet.' });
    }

    // Check if the user has already submitted a review for this service
    const existingReview = await ServiceReview.findOne({
      service_id: serviceId,
      user_id: userId,
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

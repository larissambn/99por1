import Elderly from '../models/usuários/idoso.js';
import ServiceRequest from '../models/pedidos/pedidoServiço.js';

export const authorizeTutorReviewService = async (req, res, next) => {
  const { serviceId } = req.params;
  const tutorId = req.user.id; // Tutor ID from authenticated user

  try {
    // Fetch the service request
    const serviceRequest = await ServiceRequest.findOne({
      service_id: serviceId,
    }).populate('elderly'); // Populating elderly document

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service request not found' });
    }

    // Check if the tutor is associated with the elderly in the service request
    const elderly = await Elderly.findById(serviceRequest.elderly._id); 
    if (elderly.tutor_id.toString() !== tutorId) {
      return res.status(403).json({ message: 'Forbidden: You are not authorized to review this service' });
    }

    next(); // Tutor is authorized
  } catch (error) {
    return res.status(500).json({ message: 'Error authorizing tutor', error });
  }
};

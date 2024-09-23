import ServiceRequest from '../models/pedidos/pedidoServiço.js';

export const authorizeElderlyToReview = async (req, res, next) => {
  const { serviceId } = req.params;
  const elderlyId = req.user.id; 

  try {
    // Fetch the service request
    const serviceRequest = await ServiceRequest.findOne({
      service_id: serviceId,
      elderly_id: elderlyId,
    });

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service request not found' });
    }

    if (serviceRequest.status !== 'Finished') {
      return res.status(400).json({ message: 'Cannot review. The service is not finished yet.' });
    }

    next(); // Elderly is authorized to review
  } catch (error) {
    return res.status(500).json({ message: 'Error authorizing elderly to review', error });
  }
};


import ServiceRequest from "../models/pedidos/pedidoServiço.js"
import DonationRequest from "../models/pedidos/pedidoDoação.js"
import ActivityRequest from "../models/pedidos/pedidoAtividades.js"

// Middleware to authorize tutors to manage elderly service requests
export const authorizeTutorServiceRequest = async (req, res, next) => {
  const tutorId = req.user.id;

  // Fetch the elderly user linked to the service request
  const { service_requestId } = req.params;
  const serviceRequest = await ServiceRequest.findByPk(service_requestId, {
    include: [{ model: Service, as: 'service', include: ['elderly'] }],
  });

  if (!serviceRequest) {
    return res.status(404).json({ message: 'Service request not found' });
  }

  // Check if the tutor is responsible for the elderly linked to the service request
  const elderly = serviceRequest.service.elderly;

  if (elderly.tutor_id !== tutorId) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to manage this request.' });
  }

  next();
};

export const authorizeTutorDonationRequest = async (req, res, next) => {
  const tutorId = req.user.id;

  // Fetch the elderly user linked to the donation request
  const { donation_requestId } = req.params;
  const donationRequest = await DonationRequest.findByPk(donation_requestId, {
    include: [{ model: Donation, as: 'donation', include: ['elderly'] }],
  });

  if (!donationRequest) {
    return res.status(404).json({ message: 'Donation request not found' });
  }

  // Check if the tutor is responsible for the elderly linked to the donation request
  const elderly = donationRequest.service.elderly;

  if (elderly.tutor_id !== tutorId) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to manage this request.' });
  }

  next();
};


export const authorizeTutorActivityRequest = async (req, res, next) => {
  const tutorId = req.user.id;

  // Fetch the elderly user linked to the activity request
  const { activity_requestId } = req.params;
  const activityRequest = await ActivityRequest.findByPk(activity_requestId, {
    include: [{ model: Donation, as: 'donation', include: ['elderly'] }],
  });

  if (!activityRequest) {
    return res.status(404).json({ message: 'Donation request not found' });
  }

  // Check if the tutor is responsible for the elderly linked to the activity request
  const elderly = activityRequest.service.elderly;

  if (elderly.tutor_id !== tutorId) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to manage this request.' });
  }

  next();
};
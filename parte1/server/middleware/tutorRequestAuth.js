
import ServiceRequest from "../models/pedidos/pedidoServiço.js"
import DonationRequest from "../models/pedidos/pedidoDoação.js"
import ActivityRequest from "../models/pedidos/pedidoAtividades.js"

// Middleware to authorize tutors to manage elderly service requests
export const authorizeTutorServiceRequest = async (req, res, next) => {
  const tutorId = req.user.id;

  // Fetch the elderly user linked to the service request
  const { service_requestId } = req.params;
  const serviceRequest = await ServiceRequest.findById(service_requestId).populate({
    path: 'service',
    populate: { path: 'elderly' }
  });

  if (!serviceRequest) {
    return res.status(404).json({ message: 'Service request not found' });
  }

  // Check if the tutor is responsible for the elderly linked to the service request
  const elderly = serviceRequest.service.elderly;

  if (elderly.tutor_id.toString() !== tutorId.toString()) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to manage this request.' });
  }

  next();
};

export const authorizeTutorDonationRequest = async (req, res, next) => {
  const tutorId = req.user.id;

  // Fetch the elderly user linked to the donation request
  const { donation_requestId } = req.params;
  const donationRequest = await DonationRequest.findById(donation_requestId).populate({
    path: 'donation',
    populate: { path: 'elderly' }
  });

  if (!donationRequest) {
    return res.status(404).json({ message: 'Donation request not found' });
  }

  // Check if the tutor is responsible for the elderly linked to the donation request
  const elderly = donationRequest.donation.elderly;

  if (elderly.tutor_id.toString() !== tutorId.toString()) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to manage this request.' });
  }

  next();
};

export const authorizeTutorActivityRequest = async (req, res, next) => {
  const tutorId = req.user.id;

  // Fetch the elderly user linked to the activity request
  const { activity_requestId } = req.params;
  const activityRequest = await ActivityRequest.findById(activity_requestId).populate({
    path: 'activity',
    populate: { path: 'elderly' }
  });

  if (!activityRequest) {
    return res.status(404).json({ message: 'Activity request not found' });
  }

  // Check if the tutor is responsible for the elderly linked to the activity request
  const elderly = activityRequest.activity.elderly;

  if (elderly.tutor_id.toString() !== tutorId.toString()) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to manage this request.' });
  }

  next();
};

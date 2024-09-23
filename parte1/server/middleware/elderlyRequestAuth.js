import Elderly from '../models/usuários/idoso.js';
import ServiceRequest from '../models/pedidos/pedidoServiço.js';
import DonationRequest from '../models/pedidos/pedidoDoação.js';
import ActivityRequest from '../models/pedidos/pedidoAtividades.js';

// Middleware for elderly to authorize Service Request
export const authorizeElderlyServiceRequest = async (req, res, next) => {
  const userId = req.user.id;

  // Fetch the elderly record linked to the logged-in user
  const elderly = await Elderly.findOne({ user_id: userId });

  if (!elderly) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  // Fetch the service request
  const { requestId } = req.params;
  const serviceRequest = await ServiceRequest.findById(requestId).populate('service');

  if (!serviceRequest || serviceRequest.service.elderly_id.toString() !== elderly._id.toString()) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  next();
};

// Middleware for elderly to authorize Donation Request
export const authorizeElderlyDonationRequest = async (req, res, next) => {
  const userId = req.user.id;

  // Fetch the elderly record linked to the logged-in user
  const elderly = await Elderly.findOne({ user_id: userId });

  if (!elderly) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  // Fetch the donation request
  const { requestId } = req.params;
  const donationRequest = await DonationRequest.findById(requestId).populate('donation');

  if (!donationRequest || donationRequest.service.elderly_id.toString() !== elderly._id.toString()) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  next();
};

// Middleware for elderly to authorize Activity Request
export const authorizeElderlyActivityRequest = async (req, res, next) => {
  const userId = req.user.id;

  // Fetch the elderly record linked to the logged-in user
  const elderly = await Elderly.findOne({ user_id: userId });

  if (!elderly) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  // Fetch the activity request
  const { requestId } = req.params;
  const activityRequest = await ActivityRequest.findById(requestId).populate('activity');

  if (!activityRequest || activityRequest.service.elderly_id.toString() !== elderly._id.toString()) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  next();
};

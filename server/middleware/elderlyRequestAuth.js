import Elderly from '../models/usuários/idoso.js';
import ServiceRequest from '../models/pedidos/pedidoServiço.js';
import DonationRequest from '../models/pedidos/pedidoDoação.js';
import ActivityRequest from '../models/pedidos/pedidoAtividades.js';

// Middleware for elderly to authorize Service Request
export const authorizeElderlyServiceRequest = async (req, res, next) => {
  const userId = req.user.id;

  // Fetch the elderly record linked to the logged-in user
  const elderly = await Elderly.findOne({ where: { user_id: userId } });

  if (!elderly) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  // Fetch the service request
  const { requestId } = req.params;
  const serviceRequest = await ServiceRequest.findByPk(requestId, {
    include: [{ model: Service, as: 'service' }],
  });

  if (!serviceRequest || serviceRequest.service.elderly_id !== elderly.id) {
    return res.status(403).json({ message: 'You are not authorized to manage this request' });
  }

  next();
};


  // Middleware for elderly to authorize Service Request
  export const authorizeElderlyDonationRequest = async (req, res, next) => {
    const userId = req.user.id;
  
    // Fetch the elderly record linked to the logged-in user
    const elderly = await Elderly.findOne({ where: { user_id: userId } });
  
    if (!elderly) {
      return res.status(403).json({ message: 'You are not authorized to manage this request' });
    }
  
    // Fetch the service request
    const { requestId } = req.params;
    const donationRequest = await DonationRequest.findByPk(requestId, {
      include: [{ model: Donation, as: 'donation' }],
    });
  
    if (!donationRequest || donationRequest.service.elderly_id !== elderly.id) {
      return res.status(403).json({ message: 'You are not authorized to manage this request' });
    }
  
    next();
  };


// Middleware for elderly to authorize Service Request
export const authorizeElderlyActivityRequest = async (req, res, next) => {
    const userId = req.user.id;
  
    // Fetch the elderly record linked to the logged-in user
    const elderly = await Elderly.findOne({ where: { user_id: userId } });
  
    if (!elderly) {
      return res.status(403).json({ message: 'You are not authorized to manage this request' });
    }
  
    // Fetch the service request
    const { requestId } = req.params;
    const activityRequest = await ActivityRequest.findByPk(requestId, {
      include: [{ model: Activity, as: 'activity' }],
    });
  
    if (!activityRequest || activityRequest.service.elderly_id !== elderly.id) {
      return res.status(403).json({ message: 'You are not authorized to manage this request' });
    }
  
    next();
  };


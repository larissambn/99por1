import jwt from 'jsonwebtoken';
import User from '../models/usuários/usuario.js';

export const authenticateElderly = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is elderly
    const user = await User.findById(decoded.id);
    if (!user || user.role !== 'Elderly') {
      return res.status(403).json({ message: 'Forbidden: You do not have permission to perform this action' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

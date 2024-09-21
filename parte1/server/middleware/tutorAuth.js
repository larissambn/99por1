// middleware/auth.js
import jwt from 'jsonwebtoken';
import User from '../models/usuários/representante.js';

export const authenticateTutor = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is a tutor
    const user = await User.findByPk(decoded.id);
    if (!user || user.role !== 'Tutor') {
      return res.status(403).json({ message: 'Forbidden: You do not have permission to perform this action' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

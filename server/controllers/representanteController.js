import bcrypt from 'bcryptjs';
import Tutor from '../models/usuários/representante' // Your Sequelize Tutor model

// Create tutor profile
export const registerTutor = async (req, res) => {
  const { name, age, email, phone, elderlyName, elderlyEmail, elderlyPhone, password } = req.body;

  try {
    // Check if the email already exists
    const existingTutor = await Tutor.findOne({ where: { email } });
    if (existingTutor) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new tutor
    const newTutor = await Tutor.create({
      user_type: 'representante',
      name,
      age,
      email,
      phone,
      elderlyName,
      elderlyEmail,
      elderlyPhone,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Tutor registered successfully', tutor: newTutor });
  } catch (error) {
    res.status(500).json({ message: 'Error registering tutor', error });
  }
};

// Login for tutor
export const loginTutor = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const tutor = await Tutor.findOne({ where: { email } });
      if (!tutor) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, tutor.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'Login successful', tutor });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  };

// Find tutor by email
export const findTutorByEmail = async (req, res) => {
    const { email } = req.params;
  
    try {
      const tutor = await Tutor.findOne({ where: { email } });
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
      res.json(tutor);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tutor', error });
    }
  };

// Update profile for tutor
export const updateTutorProfile = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, phone } = req.body;
  
    try {
      const tutor = await Tutor.findByPk(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      await tutor.update({ name, age, email, phone });
  
      res.json({ message: 'Tutor profile updated successfully', tutor });
    } catch (error) {
      res.status(500).json({ message: 'Error updating profile', error });
    }
  };

  // Register elderly
  export const registerElderly = async (req, res) => {
    const { id } = req.params; // ID of the tutor
    const { elderlyName, elderlyEmail, elderlyPhone } = req.body;
  
    try {
      const tutor = await Tutor.findByPk(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      await tutor.update({ elderlyName, elderlyEmail, elderlyPhone });
  
      res.json({ message: 'Elderly information registered successfully', tutor });
    } catch (error) {
      res.status(500).json({ message: 'Error registering elderly information', error });
    }
  };
  
  // Update elderly profile
  export const updateElderlyProfile = async (req, res) => {
    const { id } = req.params;
    const { elderlyName, elderlyEmail, elderlyPhone } = req.body;
  
    try {
      const tutor = await Tutor.findByPk(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      await tutor.update({ elderlyName, elderlyEmail, elderlyPhone });
  
      res.json({ message: 'Elderly profile updated successfully', tutor });
    } catch (error) {
      res.status(500).json({ message: 'Error updating elderly profile', error });
    }
  };

  // Delete elderly profile
  export const deleteElderlyProfile = async (req, res) => {
    const { id } = req.params;
  
    try {
      const tutor = await Tutor.findByPk(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      await tutor.update({ elderlyName: null, elderlyEmail: null, elderlyPhone: null });
  
      res.json({ message: 'Elderly profile deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting elderly profile', error });
    }
  };

  // Reset Password
  export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
  
    try {
      const tutor = await Tutor.findOne({ where: { email } });
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await tutor.update({ password: hashedPassword });
  
      res.json({ message: 'Password updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error resetting password', error });
    }
  };

  // Update Password
  export const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
  
    try {
      const tutor = await Tutor.findByPk(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      const isMatch = await bcrypt.compare(currentPassword, tutor.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await tutor.update({ password: hashedPassword });
  
      res.json({ message: 'Password updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating password', error });
    }
  };
  
// Delete profile for tutor
export const deleteTutorProfile = async (req, res) => {
    const { id } = req.params;
  
    try {
      const tutor = await Tutor.findByPk(id);
      if (!tutor) {
        return res.status(404).json({ message: 'Tutor not found' });
      }
  
      await tutor.destroy();
  
      res.json({ message: 'Tutor profile deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting tutor profile', error });
    }
  };
  
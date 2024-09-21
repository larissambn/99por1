import bcrypt from 'bcryptjs';
import User from "../models/usuários/usuario.js"; //  Sequelize User model

// Register a new user

export const register = async (req, res) => {
  const { name, email, password, age, phone, user_type, socialMedia_links , location_id } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      age, 
      phone,
      location_id,
      password: hashedPassword,
      user_type,
      socialMedia_links
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Authenticating a user

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Find user by id
export const findUserById = async (req, res) => {  
  const { id } = req.params;

    try {
      const user = await User.findOne({ where: { id } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
    }
  };

  //Update user
  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, age, phone, user_type, socialMedia_links , location_id} = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.update({
        name,
        email,
        age, 
        phone,
        password: hashedPassword,
        socialMedia_links,
        location_id,
        user_type
      });
  
      res.json({ message: 'User updated successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  };
  
  // Delete user

  export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.destroy();
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  };
  
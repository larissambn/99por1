import express from 'express';
import {
  register,
  login,
  findUserByEmail,
  updateUser,
  deleteUser,
} from '../controllers/usuarioController';

const userRouter = express.Router();

// POST /register - Register a new user
userRouter.post('/register', register);

// POST /login - Login user
userRouter.post('/login', login);

// GET /users/:id - Get user by ID
userRouter.get('/users/:email', findUserByEmail);

// PUT /users/:id - Update user by ID
userRouter.put('/users/:id', updateUser);

// DELETE /users/:id - Delete user by ID
userRouter.delete('/users/:id', deleteUser);

export default userRouter;

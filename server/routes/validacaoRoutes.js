import express from 'express';
import {
  registerTutor,
  loginTutor,
  findTutorByEmail,
  updateTutorProfile,
  registerElderly,
  updateElderlyProfile,
  deleteElderlyProfile,
  resetPassword,
  updatePassword,
  deleteTutorProfile,
} from '../controllers/representanteController'; // Import your tutor controller functions

const tutorValidationRouter = express.tutorValidationRouter();

// POST /tutors/register - Register a new tutor
tutorValidationRouter.post('/tutors/register', registerTutor);

// POST /tutors/login - Login tutor
tutorValidationRouter.post('/tutors/login', loginTutor);

// GET /tutors/:email - Find a tutor by email
tutorValidationRouter.get('/tutors/email/:email', findTutorByEmail);

// GET /tutors/:id - Find a tutor by ID
tutorValidationRouter.get('/tutors/id/:id', findTutorById);

// PUT /tutors/:id - Update tutor profile
tutorValidationRouter.put('/tutors/:id', updateTutorProfile);

// DELETE /tutors/:id - Delete tutor profile
tutorValidationRouter.delete('/tutors/:id', deleteTutorProfile);

// PUT /tutors/:id/register-elderly - Register elderly under a tutor
tutorValidationRouter.put('/tutors/:id/register-elderly', registerElderly);

// PUT /tutors/:id/update-elderly - Update elderly profile
tutorValidationRouter.put('/tutors/:id/update-elderly', updateElderlyProfile);

// DELETE /tutors/:id/delete-elderly - Delete elderly profile
tutorValidationRouter.delete('/tutors/:id/delete-elderly', deleteElderlyProfile);

// PUT /tutors/:id/reset-password - Reset tutor's password
tutorValidationRouter.put('/tutors/:id/reset-password', resetPassword);

// PUT /tutors/:id/update-password - Update tutor's password
tutorValidationRouter.put('/tutors/:id/update-password', updatePassword);

export default tutorValidationRouter;

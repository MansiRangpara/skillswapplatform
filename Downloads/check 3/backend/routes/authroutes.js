import express from 'express';
import {
  forgotPassword,
  resetPassword,
  registerInstructor,
  loginInstructor,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/register', registerInstructor);
router.post('/login-instructor', loginInstructor);

export default router;

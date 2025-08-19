import express from 'express';
import {
  registerUser,
  getUsers,
  getUser,
} from '../controllers/users.controller.js';

const router = express.Router();

// @route   POST /api/users & GET /api/users
router.route('/').post(registerUser).get(getUsers);

// @route   GET /api/users/:id
router.route('/:id').get(getUser);

export default router;

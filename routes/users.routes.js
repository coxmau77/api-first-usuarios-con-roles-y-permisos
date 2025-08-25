import express from 'express';
import {
  registerUser,
  getUsers,
  getUser,
} from '../controllers/users.controller.js';

const router = express.Router();

// @route   POST /users & GET /users
router.route('/').post(registerUser).get(getUsers);

// @route   GET /users/:id
router.route('/:id').get(getUser);

export default router;

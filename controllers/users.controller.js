import User from '../models/user.model.js';

// @desc    Register a new user
// @route   POST /users
// @access  Public
export const registerUser = async (req, res, next) => {
  try {
    const { username, email, birthdate, password, role } = req.body;
    const user = await User.create({
      username,
      email,
      birthdate,
      password,
      role,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users
// @route   GET /users
// @access  Private
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single user
// @route   GET /users/:id
// @access  Private
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

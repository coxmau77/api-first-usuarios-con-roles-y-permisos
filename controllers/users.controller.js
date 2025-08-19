// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const registerUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Register a user' });
};

// @desc    Get all users
// @route   GET /api/users
// @access  Private
export const getUsers = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all users' });
};

// @desc    Get a single user
// @route   GET /api/users/:id
// @access  Private
export const getUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show user ${req.params.id}` });
};

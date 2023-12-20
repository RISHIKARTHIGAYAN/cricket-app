// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth')
router.post('/register', authController.register);
router.post('/login', authController.login);
// Route for getting the user profile
router.get('/profile', authMiddleware, authController.getProfile);

// Route for updating the user profile
router.put('/profile', authMiddleware, authController.updateProfile);
module.exports = router;

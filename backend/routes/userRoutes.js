// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user role based on username
router.put('/users/:username/update-role', async (req, res) => {
  try {
    const { username } = req.params;
    const  newRole  = req.body.newRole;
    console.log(username,req.body.role,JSON.stringify(username));
    // Find the user by username and update their role
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { role: newRole },
      { new: true } // Return the updated user
    );
    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ message: 'User role updated successfully.', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user based on username
router.delete('/users/:username/delete', async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user by username and delete them
    const deletedUser = await User.findOneAndDelete({ username: username });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ message: 'User deleted successfully.', user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

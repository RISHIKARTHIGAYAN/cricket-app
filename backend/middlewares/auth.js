// middlewares/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key');
    console.log(decoded)
    // Attach the user ID to the request object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

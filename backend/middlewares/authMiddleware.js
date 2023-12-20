// middleware/authMiddleware.js
const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user ? req.user.role : 'user';
  
      if (allowedRoles.includes(userRole)) {
        return next();
      }
  
      return res.status(403).json({ message: 'Permission denied.' });
    };
  };
  
  module.exports = { checkRole };
  
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; 

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.development.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user; 
    next();
  });
};

module.exports = { authenticateJWT };

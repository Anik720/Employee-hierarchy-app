const jwt = require('jsonwebtoken');

const protectedEndpoint = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ message: 'Authorized' });
    } catch (error) {
        res.status(403).json({ error: 'Unauthorized' });
    }
};
module.exports = { protectedEndpoint };
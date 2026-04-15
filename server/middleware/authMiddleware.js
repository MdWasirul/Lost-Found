import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
    let token;

    // 1. Get token from cookies
    token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }

    try {
        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Find user and attach to the request (so the controller knows WHO is posting)
        req.user = await User.findById(decoded.id).select('-password');
        
        // This is important: req.userId is used in your item controllers
        req.userId = decoded.id; 

        next(); // Move to the next function (the Controller)
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        res.status(401).json({ message: "Not authorized, token failed" });
    }
};
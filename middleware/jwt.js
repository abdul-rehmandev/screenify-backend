import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(400).json({ message: "You are not authenticated" })


    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) return res.status(400).json({ message: "Token is not valid" })
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin;
        next()
    });
};

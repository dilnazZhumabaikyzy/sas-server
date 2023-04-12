import jwt  from "jsonwebtoken";
import config from '../config/config.js';


export default function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            console.log("ROLE MIDDLEWARE TEST!")
            const secret = process.env.JWT_ACCESS_SECRET
            const token = req.headers.authorization.split(' ')[1]
            console.log(token)
            // if (!token) {
            //     return res.status(403).json({message: "Пользователь не авторизован"})
            // }


            const {role} = jwt.verify(token, secret)
            let hasRole = false
            if (roles.includes(role)) {
                    hasRole = true
            }
            
            if (!hasRole) {
                return res.status(403).json({message: "У вас нет доступа"})
            }
            next();
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
};

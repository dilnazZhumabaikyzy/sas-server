import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { check } from "express-validator";
import userController from "../controllers/userController.js";

const router = new Router();

router.post('/registration',
                            [check('password',"Длина пароля должна быть не менее 6 и не более 16 символов").isLength({min: 6, max: 16})],
            userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users',authMiddleware, roleMiddleware(["ADMIN"]), userController.getUsers);
router.get('/test', userController.getUsers )
export  {router};

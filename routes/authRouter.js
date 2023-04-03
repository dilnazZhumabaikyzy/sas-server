import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware.js";


const router = new Router();

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users',authMiddleware, roleMiddleware(["ADMIN"]), userController.getUsers);

export  {router};

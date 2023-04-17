import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { check } from "express-validator";
import userController from "../controllers/userController.js";
import studentController from "../controllers/studentController.js";

const router = new Router();

router.post('/registration',
                            [check('password',"Password length should be between 6 and 16").isLength({min: 6, max: 16})],
            userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/testAuth',authMiddleware, userController.getUsers);
router.get('/testRole',authMiddleware, roleMiddleware(["admin"]), userController.getUsers);

router.get('/test', userController.getUsers );
//Special Reason Routes

router.post('/recordSpecialReason', studentController.recordReason);
router.post('/getAuthorizedUsers', studentController.getAuthorized);

//Student Routes
router.post('/registrate', studentController.registrate);

//teacher Routes

//user Routes
router.post('/searchStudents', userController.searchStudent);


export  {router};
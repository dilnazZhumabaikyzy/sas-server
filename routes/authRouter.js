import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { check } from "express-validator";
import userController from "../controllers/userController.js";
import studentController from "../controllers/studentController.js";
import adminController from "../controllers/adminController.js"

const router = new Router();

router.post('/registration',
    [check('password', "Password length should be between 6 and 16").isLength({ min: 6, max: 16 })],
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/testAuth', authMiddleware, userController.getUsers);
router.get('/testRole', authMiddleware, roleMiddleware(["admin"]), userController.getUsers);

router.get('/test', userController.getUsers);

router.post('/recordSpecialReason', studentController.recordReason);
router.post('/getAuthorizedUsers', studentController.getAuthorized);

router.get('/reasons', adminController.getReasons)

router.post('/registrateAttendance', studentController.registrateAttendance);
router.post('/getAttendance', studentController.getAttendanceStatus);
router.post('/updateAttendance', studentController.updateAttendance);

router.put('/reasons/:reasonId', adminController.updateReason)

router.post('/searchStudents', userController.searchStudent);
router.post('/searchStudents', userController.searchTeacher);

router.get('/lessons', studentController.lessons);

export { router };
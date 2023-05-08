import Lessons from "../models/lessons.js";
import attendanceService from "../service/attendanceService.js";
import specialReasonService from "../service/specialReasonService.js";
import userService from "../service/userService.js";
import { Buffer } from 'buffer';

class studentController {
    async registrateAttendance(req, res, next) {
        try {
            const { lessonId, userId } = req.body;
            console.log("attendancecontroller")
            const attendanceStatus = await attendanceService.registrateAttendance(lessonId, userId);
            console.log(attendanceStatus)
            return res.json(attendanceStatus);
        } catch (error) {
            next(error);
        }
    }

    async getAttendanceStatus(req, res, next) {
        try {
            const { lessonId, userId } = req.body;
            console.log("attendancecontroller")
            const attendanceStatus = await attendanceService.getAttendanceStatus(lessonId, userId);
            console.log(attendanceStatus)
            return res.json(attendanceStatus);
        } catch (error) {
            next(error);
        }
    }
    async recordReason(req, res, next) {
        try {
            const { file, studentId, fromDate, toDate, type, comment, fileName, firstName, lastName } = req.body;
            const recordStatus = await specialReasonService.recordReason(file, studentId, fromDate, toDate, comment, type, fileName, firstName, lastName);
            return res.json(recordStatus);
        } catch (error) {
            next(error);
        }
    }
    async getAuthorized(req, res, next) {
        try {
            const { studentId } = req.body;
            console.log("getAuthorized")
            const authorizedUsers = await specialReasonService.getAuthorized(studentId);
            console.log(authorizedUsers)
            return res.json(authorizedUsers);
        } catch (error) {
            next(error);
        }
    }
    async lessons(req, res, next) {
        try {
            const { studentId } = req.body;
            console.log("lessons")
            console.log("req body:" + req.body)
            const lessons = await userService.lessons(studentId);
            console.log(lessons)
            return res.json(lessons);
        } catch (error) {
            next(error);
        }
    }
}
export default new studentController();
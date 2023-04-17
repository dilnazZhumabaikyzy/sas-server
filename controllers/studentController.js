import attendanceService from "../service/attendanceService.js";
import specialReasonService from "../service/specialReasonService.js";

class studentController{    
    async registrate(req,res, next){
        try {
            const {lessonId, userId} = req.body;
            console.log("attendancecontroller")
            const attendanceStatus = await attendanceService.registrate(lessonId, userId);      
            console.log(attendanceStatus)  
            return res.json(attendanceStatus);
        } catch (error) {
            next(error);
        }
    }
    async recordReason(req,res, next){
        try {
            const {fileData, studentId, fromDate, toDate, type, comment} = req.body;
            console.log("recordReason")
            const recordStatus = await specialReasonService.recordReason(fileData, studentId, fromDate, toDate,comment, type);      
            console.log(recordStatus)  
            return res.json(recordStatus);
        } catch (error) {
            next(error);
        }
    }
    async getAuthorized(req,res, next){
        try {
            const {studentId} = req.body;
            console.log("getAuthorized")
            const authorizedUsers = await specialReasonService.getAuthorized(studentId);      
            console.log(authorizedUsers)  
            return res.json(authorizedUsers);
        } catch (error) {
            next(error);
        }
    }
}
export default new studentController();
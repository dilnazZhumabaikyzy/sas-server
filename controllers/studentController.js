import AttendanceService from "../service/attendanceService.js";

class studentController{    
    async registrate(req,res, next){
        try {
            const {lessonId, userId} = req.body;
            const attendanceStatus = await AttendanceService.registrate(lessonId, userId);         
            return res.json(attendanceStatus);
        } catch (error) {
            next(error);
        }
    }
}
export default new studentController();
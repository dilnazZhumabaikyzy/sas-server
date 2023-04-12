import attendanceService from "../service/attendanceService.js";

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
}
export default new studentController();
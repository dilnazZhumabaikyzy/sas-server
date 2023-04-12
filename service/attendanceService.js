import ApiError from "../exeptions/api-error.js";
import Attendances from "../models/attendance.js";
import Enrollment from "../models/enrollment.js";


class AttendanceService{
    async registrate(lessonId,userId){
        const enrollment = await Enrollment.findOne({where: {lessonId:lessonId, studentId:userId}})
        if(!enrollment){
            throw ApiError.UnenrolledLesson()
        }
    
        const time = new Date()
        const attendanceArray = await Attendances.findAll({where: {lessonId:lessonId, studentId:userId}})
        if(attendanceArray){
            for (record in attendanceArray){
                console.log(record)
                const date = new Date(record.time); 
                const diffInSeconds = Math.abs(time.getTime() - date.getTime()) / 1000;
                if(diffInSeconds < 60){
                    throw ApiError.ResponseLimit();
                }
            }

        }
        const attendance = await Attendances.create({
            studentId: userId,
            time: time.toString(),
            lessonId: lessonId
          });
          return attendance;
    }
}

export default AttendanceService;
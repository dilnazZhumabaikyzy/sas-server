import ApiError from "../exeptions/api-error.js";
import Attendances from "../models/attendance.js";
import Enrollments from "../models/enrollment.js";


class AttendanceService{
    async registrate(lessonId,userId){
        const enrollment = await Enrollments.findOne({where: {lessonId: lessonId, studentId: userId}})
        console.log(enrollment)
        if(!enrollment){
            throw ApiError.UnenrolledLesson()
        }
    
        const time = new Date()
        const attendanceArray = await Attendances.findOne({where: {lessonId:lessonId, studentId:userId}})
        if(attendanceArray){           
                const record = attendanceArray;
                console.log(record)
                const date = new Date(record.entryTime); 
                const diffInSeconds = Math.abs(time.getTime() - date.getTime()) / 1000;
                if(diffInSeconds < 60){
                    throw ApiError.ResponseLimit();
                }
                else{
                // Update the attendance record with the new exit time
                const updatedRecord = await Attendances.update(
                    { exitTime: time.toString() },
                    { where: { attendanceId: record.attendanceId }, returning: true }
                );
                console.log(updatedRecord[1][0]);
                return updatedRecord[1][0];
                }
        }
        const attendance = await Attendances.create({
            studentId: userId,
            entryTime: time.toString(),
            lessonId: lessonId
          });
          return attendance;
    }
}

export default new AttendanceService();
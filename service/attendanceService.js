import ApiError from "../exeptions/api-error.js";
import Attendances from "../models/attendance.js";
import Enrollments from "../models/enrollment.js";
import { Sequelize } from 'sequelize';

class AttendanceService{
    async registrateAttendance(lessonId,userId){
        const enrollment = await Enrollments.findOne({where: {lessonId: lessonId, studentId: userId}})
        console.log(enrollment)
        if(!enrollment){
            throw ApiError.UnenrolledLesson()
        }
        const time = new Date()
        const attendanceLast = await Attendances.findOne({where: {lessonId:lessonId, studentId:userId}})
        if(attendanceLast){           
                const record = attendanceLast;
                console.log(record.entryTime)
                const recordDate = new Date()
                const today = new Date(record.entryTime);
                const isToday = (today.getFullYear() === recordDate.getFullYear() &&
                                today.getMonth() === recordDate.getMonth() &&
                                today.getDate() === recordDate.getDate());

                if (isToday) {
                console.log('Record date is today');
                const date = new Date(record.entryTime); 
                const diffInSeconds = Math.abs(time.getTime() - date.getTime()) / 1000;
                if(diffInSeconds < 60){
                    throw ApiError.ResponseLimit();
                }
                else{
                // Update the attendance record with the new exit time
                const updatedRecord = await Attendances.update(
                    { exitTime: time.toString(),  status: "Accepted" },
                    { where: { attendanceId: record.attendanceId }, returning: true }
                );
                console.log(updatedRecord[1][0]);
                return updatedRecord[1][0];
                }
                } else {
                console.log('Record date is not today');
                }
        }

        const attendance = await Attendances.create({
            studentId: userId,
            entryTime: time.toString(),
            lessonId: lessonId,
            status: "In class"
          });
          return attendance;
    }
    async getAttendanceStatus(lessonId,userId){
        const today = new Date();
        const attendance = await Attendances.findOne({
            where: {
            lessonId: lessonId,
            studentId: userId,
            entryTime: {
                [Sequelize.Op.gte]: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                [Sequelize.Op.lt]: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
            },
            },
        });
        console.log(attendance)
        return "attendance";
    }
}

export default new AttendanceService();
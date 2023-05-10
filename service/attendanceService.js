import ApiError from "../exeptions/api-error.js";
import Attendances from "../models/attendance.js";
import Enrollments from "../models/enrollment.js";
import { Op } from 'sequelize';

class AttendanceService {
    async registrateAttendance(lessonId, userId) {
        const time = new Date()
        const attendanceLast = await Attendances.findOne({ where: { lessonId: lessonId, studentId: userId } })
        if (attendanceLast) {
            const record = attendanceLast;
            const recordDate = new Date()
            const today = new Date(record.entryTime);
            const isToday = (today.getFullYear() === recordDate.getFullYear() &&
                today.getMonth() === recordDate.getMonth() &&
                today.getDate() === recordDate.getDate());

            if (isToday) {
                const date = new Date(record.entryTime);
                const diffInSeconds = Math.abs(time.getTime() - date.getTime()) / 1000;
                if (diffInSeconds < 60) {
                    throw ApiError.ResponseLimit();
                }
                else {
                    const updatedRecord = await Attendances.update(
                        { exitTime: time.toString(), status: "Accepted" },
                        { where: { attendanceId: record.attendanceId }, returning: true }
                    );
                    return updatedRecord[1][0];
                }
            } else {
            }
        }

        const attendance = await Attendances.create({
            studentId: userId,
            entryTime: time.toString(),
            lessonId: lessonId,
            status: "In Class"
        });
        return attendance;
    }
    async getAttendanceStatus(lessonId, userId) {
        const today = new Date();
        const attendance = await Attendances.findOne({
            where: {
                studentId: userId,
                entryTime: {
                    [Sequelize.Op.gte]: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                    [Sequelize.Op.lt]: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
                },
            },
        });
        return attendance;
    }

    async getTodayAttendances(userId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const attendances = await Attendances.findAll({
            where: {
                entryTime: {
                    [Op.gte]: today,
                },
                studentId: userId
            },
        });
        return attendances;
    }

    async updateAttendances(userId) {
        const todayAttendances = await getTodayAttendances(userId);
        const currentTime = new Date();
        console.log("we are in update attendances")
        console.log(todayAttendances)
        for (let i = 0; i < todayAttendances.length; i++) {
            const attendance = todayAttendances[i];
            const entryTime = new Date(attendance.entryTime);
            const timeDiffInSeconds = Math.floor((currentTime - entryTime) / 1000);
            console.log(timeDiffInSeconds)
            if (timeDiffInSeconds >= 10 && attendance.status !== "Exit") {
                await Attendances.update(
                    { status: "Exit" },
                    { where: { attendanceId: attendance.attendanceId } }
                );
            }
        }
    }
}

export default new AttendanceService();
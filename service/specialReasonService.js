import ApiError from "../exeptions/api-error.js";
import Attendances from "../models/attendance.js";
import Enrollments from "../models/enrollment.js";
import SpecialReasons from "../models/specialReason.js";
import Students from "../models/student.js";
import Users from "../models/users.js";


class SpecialReasonService{
    async recordReason(fileData, studentId, fromDate, toDate, comment, type){
        const record = await SpecialReasons.create({
            studentId: studentId,
            document: fileData,
            fromDate: new Date(),
            toDate:  new Date(),
            reasonType: type,
            comment: comment
          });
          return record;
    } 
    async getAuthorized(studentId){
        const students = await Students.findAll({
            where: { authorizedId: studentId },
            include: {
              model: Users,
              attributes: ['firstName', 'lastName']
            },
            attributes: ['studentId', 'authorizedId']
          });
          console.log(students)
          const studentData = students.map(student => {
            console.log('student:', student.toJSON());
            const { studentId, authorizedId} = student.toJSON();
            const { firstName, lastName } = student.user.toJSON();
            return { studentId, authorizedId,firstName, lastName };
          });
          
          return studentData;
    }    
}
export default new SpecialReasonService();
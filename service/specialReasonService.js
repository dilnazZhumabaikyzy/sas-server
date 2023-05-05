import ApiError from "../exeptions/api-error.js";
import Attendances from "../models/attendance.js";
import Enrollments from "../models/enrollment.js";
import SpecialReasons from "../models/specialReason.js";
import Students from "../models/student.js";
import Users from "../models/users.js";
import fs from 'fs';


class SpecialReasonService {
  async recordReason(file, studentId, fromDate, toDate, comment, type, fileName, firstName, lastName) {
    const record = await SpecialReasons.create({
      studentId: studentId,
      document: file,
      fromDate: fromDate,
      toDate: toDate,
      reasonType: type,
      comment: comment,
      fileName: fileName,
      firstName: firstName,
      lastName: lastName,
      status: "REQUESTED"
    });
    return record;
  }
  async getAuthorized(studentId) {
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
      const { studentId, authorizedId } = student.toJSON();
      const { firstName, lastName } = student.user.toJSON();
      return { studentId, authorizedId, firstName, lastName };
    });

    return studentData;
  }
}
export default new SpecialReasonService();
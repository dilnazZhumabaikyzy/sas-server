export default class StudentDto{
    studentId;
    firstName;
    lastName;
    major;
    authorizedId;
    lessonIds

    constructor(user_model, student_model){
        this.studentId = user_model.userId;
        this.lastName = user_model.lastName;
        this.firstName = user_model.firstName;
        this.major = student_model.major;
        this.authorizedId = student_model.authorizedId;
        this.lessonIds = student_model.lessonIds;
    }
}
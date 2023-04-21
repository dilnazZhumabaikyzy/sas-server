export default class TeacherDto {
    teacherId;
    firstName;
    lastName;
    lessonIds;
    role

    constructor(user_model, teacher_model) {
        this.teacherId = user_model.userId;
        this.lastName = user_model.lastName;
        this.firstName = user_model.firstName;
        this.lessonIds = teacher_model.lessonIds
        this.role = 'teacher'
    }
}
export default class StudentDto{
    student_id;
    firstName;
    lastName;
    major;
    authorized_id;
    lesson_ids

    constructor(user_model, student_model){
        this.student_id = user_model.user_id;
        this.lastName = user_model.lastName;
        this.firstName = user_model.firstName;
        this.major = student_model.major;
        this.authorized_id = student_model.authorized_id;
        this.lesson_ids = student_model.lesson_ids;
    }
}
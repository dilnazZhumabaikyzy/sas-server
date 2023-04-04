export default class StudentDto{
    student_id;
    first_name;
    last_name;
    major;
    authorized_id;
    lesson_ids

    constructor(user_model, student_model){
        this.student_id = user_model.user_id;
        this.last_name = user_model.last_name;
        this.first_name = user_model.first_name;
        this.major = student_model.major;
        this.authorized_id = student_model.authorized_id;
        this.lesson_ids = student_model.lesson_ids;
    }
}
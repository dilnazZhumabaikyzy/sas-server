export default class AdminDto {
    adminId;
    firstName;
    lastName;
    role

    constructor(user_model, student_model) {
        this.adminId = user_model.userId;
        this.lastName = user_model.lastName;
        this.firstName = user_model.firstName;
        this.role = 'admin'
    }
}
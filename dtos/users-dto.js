export default class UsersDto {
    user_id;
    firstName;
    lastName;
    role;

    constructor(model) {
        this.user_id = model.user_id;
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.role = model.role;
    }
}
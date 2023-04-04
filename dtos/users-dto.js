export default class UsersDto {
    userId;
    firstName;
    lastName;
    role;

    constructor(model) {
        this.userId = model.userId;
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.role = model.role;
    }
}
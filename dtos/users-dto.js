export default class UsersDto {
    user_id;
    first_name;
    last_name;
    role;

    constructor(model) {
        this.user_id = model.user_id;
        this.first_name = model.first_name;
        this.last_name = model.last_name;
        this.role = model.role;
    }
}
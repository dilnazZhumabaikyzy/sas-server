class ApiError extends Error{
    status;
    errors;

    constructor(status, message, errors){
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401,'User is unauthorized')
    }
    static UnenrolledLesson() {
        return new ApiError(401,'Student is not enrolled to this lesson')
    }
    static BadRequest(message,errors = []) {
        return new ApiError(400,message,errors)
    }
    
    static ResponseLimit() {
        return new ApiError(401,'Too many requests')
    }
}

export default ApiError;
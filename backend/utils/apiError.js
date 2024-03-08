class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        error = []
        ){
            super(message)
            this.statusCode = statusCode
            this.data = null
            this.message= message
            this.success = false
            this.error = error
        }
}

export {ApiError}
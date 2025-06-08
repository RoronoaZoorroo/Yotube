class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)

        this.error = errors
        this.message = message
        this.statusCode = statusCode
        this.data = null
        this.success = false
        
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
class SymplrError extends Error{
    constructor(message, status){
        super(message);
        this.message = this.constructor.message;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
    }
};
SymplrError.CONFLICT = 403;

module.exports = SymplrError;

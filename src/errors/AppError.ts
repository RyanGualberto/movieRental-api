export class AppError {
    public readonly message: string;
    public readonly StatusCode: number;

    constructor(message: string, statusCode = 400){
        this.message = message;
        this.StatusCode = statusCode;
    }
}
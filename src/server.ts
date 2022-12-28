import express, { NextFunction, Request, response, Response } from "express"
import "express-async-errors"
import { AppError } from "./errors/AppError";
import { routes } from "./routes";

const app = express();

app.use(express.json())
app.use(routes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.StatusCode).json({
            status: "error",
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `internal server error - ${err.message}`
    })
})

app.listen(3000, () => console.log("server is running on port 3000"))
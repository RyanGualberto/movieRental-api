import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
    async handle(req: Request, res: Response){
        const {movieId, userId} = req.body;

        const createMovieRentUseCase = new CreateMovieRentUseCase();

        const result = await createMovieRentUseCase.execute({
            movieId,
            userId
        })

        res.status(201).json({
            message: "movie rented was sucessfuly"
        })
    }
}
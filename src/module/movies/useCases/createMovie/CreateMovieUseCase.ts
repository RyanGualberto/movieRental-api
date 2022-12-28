import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
    async execute({title, duration,release_date}: CreateMovieDTO): Promise<Movie> {
        //verificar se o filme existe
        const movieAlreadyExists = await prisma.movie.findUnique({
            where:{
                title
            }
        })

        //erro email existente
        if(movieAlreadyExists){
            throw new AppError("Movie Already Exists!")
        }

        // Criar useryar
        const movie = await prisma.movie.create({
            data: {
                title,
                duration,
                release_date
            }
        });

        return movie
    }
}   
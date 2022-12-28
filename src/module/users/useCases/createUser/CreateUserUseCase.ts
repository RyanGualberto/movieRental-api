import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({name, email}: CreateUserDTO): Promise<User> {
        //verificar se o user existe
        const userAlreadyExists = await prisma.user.findUnique({
            where:{
                email
            }
        })

        //erro email existente
        if(userAlreadyExists){
            throw new AppError("User Already Exists!")
        }

        // Criar useryar
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user
    }
}   
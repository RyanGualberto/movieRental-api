import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response){
        const {name, email} = req.body;

        const createUserUserCase = new CreateUserUseCase();

        const result = await createUserUserCase.execute({name, email});
         
        return res.status(201).json(result);
    }
}
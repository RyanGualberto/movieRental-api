import { Router } from "express";
import { CreateUserController } from "../module/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../module/users/useCases/getAllUsers/getAllUsersController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", getAllUsersController
.handle)

export { userRoutes }
import { Router } from "express";
import { CreateMovieRentController } from "../module/movieRent/useCases/createMovieRentController";
import { CreateMovieController } from "../module/movies/useCases/createMovie/CreateMovieController";
import { GetMoviesByReleaseDateController } from "../module/movies/useCases/getMoviesByReleaseDate/getMoviesByReleaseDateController";

const movieRoutes = Router();

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController()
const createMovieRentController = new CreateMovieRentController();

movieRoutes.post("/", createMovieController.handle)
movieRoutes.get("/release", getMoviesByReleaseDateController.handle )

movieRoutes.post("/rent", createMovieRentController.handle)

export { movieRoutes }
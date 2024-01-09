import { Router } from "express";
import { CategoriesController } from "../controllers/CategoriesController";

const categoriesRouter = Router();

categoriesRouter.post('/', new CategoriesController().create);

export { categoriesRouter }
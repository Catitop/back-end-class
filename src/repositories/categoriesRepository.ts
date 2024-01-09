import { Category } from "../entities/Category";
import { AppDataSource } from "../../data-source";

export const categoriesRepository = AppDataSource.getRepository(Category);
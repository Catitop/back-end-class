import { Product } from "../entities/Product";
import { AppDataSource } from "../../data-source";

export const productsRepository = AppDataSource.getRepository(Product);
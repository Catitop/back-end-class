import { Supplier } from "../entities/Supplier";
import { AppDataSource } from "../../data-source";

export const suppliersRepository = AppDataSource.getRepository(Supplier);
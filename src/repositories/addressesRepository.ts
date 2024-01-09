import { AppDataSource } from "../../data-source";
import { Address } from "../entities/Address";

const addressesRepository = AppDataSource.getRepository(Address);

export { addressesRepository }
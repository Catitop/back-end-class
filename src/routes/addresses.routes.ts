import { Router } from "express";
import { AddressesController } from "../controllers/AddressesController";

const addressesRouter = Router();

addressesRouter.post("/", new AddressesController().create);

export { addressesRouter }
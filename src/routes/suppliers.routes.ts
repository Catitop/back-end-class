import { SuppliersController } from "../controllers/SuppliersController";
import { Router } from "express";

const suppliersRouter = Router();

suppliersRouter.post("/", new SuppliersController().create);
suppliersRouter.get("/", new SuppliersController().getList);
suppliersRouter.get("/:id", new SuppliersController().get);

export { suppliersRouter };

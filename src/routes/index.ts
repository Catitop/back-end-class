import { Router } from "express";
import { productsRouter } from "./products.routes";
import { suppliersRouter } from "./suppliers.routes";
import { categoriesRouter } from "./categories.routes";
import { addressesRouter } from "./addresses.routes";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/suppliers", suppliersRouter);
routes.use("/categories", categoriesRouter);
routes.use("/addresses", addressesRouter);

export { routes };
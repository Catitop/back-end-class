import { ProductsController } from "../controllers/ProductsController";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/', new ProductsController().getList);
productsRouter.get('/:id', new ProductsController().get);
productsRouter.post('/', new ProductsController().create);
productsRouter.put('/:id', new ProductsController().update);

export { productsRouter };
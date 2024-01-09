import { Request, Response } from "express";
import { productsRepository } from "../repositories/productsRepository";
import { categoriesRepository } from "../repositories/categoriesRepository";
import { Product } from "../entities/Product";
import { suppliersRepository } from "../repositories/suppliersRepository";

class ProductsController {

    public async getList(request: Request, response: Response) {
        const products = await productsRepository.find({
            relations: {
                supplier: true
            }
        });

        return response.status(200).send(products);
    }

    public async get(request: Request, response: Response) {
        const { id } = request.params;

        const product = await productsRepository.findOne({
            where: {
                id
            }
        });

        if(product == null) return response.status(404).send();

        return response.status(200).send(product);
    }

    public async create(request: Request, response: Response) {
        const {
            title,
            quantity,
            measureUnit,
            purchasePrice,
            salePrice,
            categoryId,
            supplierId
        } = request.body;

        const supplier = await suppliersRepository.findOne({
            where: {
                id: supplierId
            }
        });

        if(supplier == null) return response.status(422).send("Supplier does not exists!");

        const category = await categoriesRepository.findOne({
            where: {
                id: categoryId
            }
        });

        if(category == null) return response.status(422).send("Category does not exists!");

        const product = new Product();

        product.title = title;
        product.quantity = quantity;
        product.measureUnit = measureUnit;
        product.salePrice = salePrice;
        product.purchasePrice = purchasePrice;
        product.categories = [category];
        product.supplier = supplier;

        // const productEntity = productsRepository.create(product);
        await productsRepository.save(product);

        return response.status(201).send(product);
    }

    public async update(request: Request, response: Response) {
        const { id } = request.params;
        const { title, quantity, measureUnit, salePrice, purchasePrice } = request.body;

        const product = await productsRepository.findOne({
            where: {
                id
            }
        });

        if(product === null) return response.status(404).send();

        product.title = title;
        product.quantity = quantity;
        product.purchasePrice = purchasePrice;
        product.measureUnit = measureUnit;
        product.salePrice = salePrice;

        await productsRepository.save(product);

        return response.status(204).send();
    }
};

export { ProductsController };
import { categoriesRepository } from "../repositories/categoriesRepository";
import { Request, Response } from "express";

class CategoriesController {
    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const category = categoriesRepository.create(data);
        await categoriesRepository.save(category);

        return response.status(201).send(category);
    }
}

export { CategoriesController };
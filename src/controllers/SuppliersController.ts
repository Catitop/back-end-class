import { Request, Response } from "express";
import { suppliersRepository } from "../repositories/suppliersRepository";
import { addressesRepository } from "../repositories/addressesRepository";
import { Supplier } from "../entities/Supplier";

class SuppliersController {

    async create(request: Request, response: Response): Promise<Response> {
        const {
            name,
            cnpj,
            addressId
        } = request.body;

        const address = await addressesRepository.findOne({
            where: {
                id: addressId
            }
        });

        if(address == null) return response.status(422).send("Address does not exists!");

        const supplier = new Supplier();

        supplier.name = name;
        supplier.cnpj = cnpj;
        supplier.address = address;

        await suppliersRepository.save(supplier);

        return response.status(201).send(supplier);
    }

    async getList(request: Request, response: Response): Promise<Response> {
        const suppliers = await suppliersRepository.find({
            relations: {
                address: true
            }
        })

        return response.status(200).send(suppliers);
    }

    async get(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const supplier = await suppliersRepository.findOne({
            where: {
                id
            },
            relations: {
                products: true
            }
        });

        if(supplier == null) return response.status(404).send();

        return response.status(200).send(supplier);
    }
}

export { SuppliersController };
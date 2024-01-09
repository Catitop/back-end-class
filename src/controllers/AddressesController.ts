import { Request, Response } from "express";
import { addressesRepository } from "../repositories/addressesRepository";
import { Address } from "../entities/Address";
import { suppliersRepository } from "../repositories/suppliersRepository";

class AddressesController {
    async create(request: Request, response: Response): Promise<Response> {
        const {
            street,
            neighbourhood,
            number,
        } = request.body;

        const address = new Address();

        address.street = street;
        address.neighbourhood = neighbourhood;
        address.number = number;

        await addressesRepository.save(address);

        return response.status(201).send(address);
    }
}

export { AddressesController }
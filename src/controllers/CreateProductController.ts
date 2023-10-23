import { Request, Response } from "express";
import { prismaClient } from "../data_base/prismaClient";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name
                , bar_code
                , price } = request.body;

        const product = await prismaClient.products.create({
            data: {
                bar_code,
                name,
                price,
            },
        });

        return response.json(product);
    }
}
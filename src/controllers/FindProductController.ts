import { Request, Response } from "express";
import { prismaClient } from "../data_base/prismaClient";

export class FindProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const product = await prismaClient.products.findFirst({
            where: {
                id,
            },
            include: {
                ProductCategory: {
                    include: {
                        category: true,
                    },
                },
            },
        });

        return response.json(product);
    }
}
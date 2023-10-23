import { Request, Response } from "express";
import { prismaClient } from "../data_base/prismaClient";

export class CreateProductCategoryController {
    async handle(request: Request, response: Response) {
        const { id_products
                , id_category } = request.body;

        const productCategory = await prismaClient.productCategory.create({
            data: {
                id_category,
                id_products,
            },
        });

        return response.json(productCategory);
    }
}
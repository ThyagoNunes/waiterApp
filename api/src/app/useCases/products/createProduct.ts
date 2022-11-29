import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
    try {
        const imagePath = req.file?.filename;
        const { name, description, price, category, ingredients } = req.body;

        const product = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price),
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [], // if exists ingredients MAKE PARSE else []
        });

        res.status(201).json(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

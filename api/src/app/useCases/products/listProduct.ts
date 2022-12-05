import {Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProduct(req: Request, res: Response) {
    try {
        const {productId} = req.params;

        const productExist = await Product.findById(productId);

        if(!productExist) {
            return res.status(400).json({error: 'This Category is not exists'});
        }

        res.status(200).json(productExist);
    } catch (error) {
        console.log(error);
    }
}

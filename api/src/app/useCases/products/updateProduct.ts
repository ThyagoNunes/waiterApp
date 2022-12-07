import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function updateProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.fieldname;
    const { productId } = req.params;
    const { name, description, price, category, ingredients } = req.body;

    if (!name) {
      return res.status(404).json({ error: 'NAME are required' });
    }
    const productExists = await Product.findById(productId);

    if (!productExists) { // Retornando msg para produto que não existe
      return res.status(400).json({ error: 'This product not exists' });
    }

    if (name && name !== productExists.name) {
      return res.status(400).json({ error: `Product ${name} is already exists` });
    }

    const product = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

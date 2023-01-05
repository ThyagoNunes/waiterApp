import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({
        error: 'NAME, DESCRIPTION, IMAGE, PRICE & CATEGORY are required',
      });
    }

    const nameExists = await Product.findOne({ name });
    if (nameExists?.name) {
      return res
        .status(400)
        .json({ error: `Product ${name} is already exists` });
    }

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

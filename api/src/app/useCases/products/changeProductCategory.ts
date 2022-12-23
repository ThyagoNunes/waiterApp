import { Request, Response } from 'express';
import { Category } from '../../models/Category';

import { Product } from '../../models/Product';

export async function changeProductCategory(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { category } = req.body;

    const existsProduct = await Product.findById(productId);

    if(!existsProduct) {
      return res.status(404).json({error: 'Product not found'});
    }

    const existsCategory = await Category.findById(category);

    if(!existsCategory){
      return res.status(404).json({error: 'Category not found'});
    }

    await Product.findByIdAndUpdate(productId, { category });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

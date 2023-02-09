import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function changeProductImagePath(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const { imagePath } = req.body;

    const existsProduct = await Product.findById(productId);

    if (!existsProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const existsImagePath = await Product.findById(imagePath);

    if (!existsImagePath) {
      return res.status(404).json({ error: 'ImagePath not found' });
    }

    const converted = JSON.stringify(imagePath);

    await Product.findByIdAndUpdate(productId, { converted });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

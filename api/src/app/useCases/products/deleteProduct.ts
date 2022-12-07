import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    const productExists = await Product.findById(productId);

    if (!productExists) {
      return res.status(400).json({ error: 'This product not exists' });
    }

    await Product.findByIdAndDelete(productId);
    return res.sendStatus(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function updateCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { name, icon } = req.body;

    if (!name || !icon) {
      return res.status(404).json({ error: 'NAME AND ICON both are requireds' });
    }

    const categoryExists = await Category.findById(categoryId);

    if (!categoryExists) { // Retornando msg para categoria que não existe
      return res.status(400).json({ error: 'This category not exists' });
    } // here \/

    const nameExists = await Category.find({ name });
    if (!nameExists && name !== categoryExists.name) {
      return res.status(400).json({ error: `Category ${name} is ss already exists` });
    }

    const iconExists = await Category.find({ icon });
    if (!iconExists && icon !== categoryExists.icon) {
      return res.status(400).json({ error: `Category ${icon} is already exists` });
    }

    await Category.findByIdAndUpdate(categoryId, { name, icon });
    res.status(200).json({ name, icon });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
    try {
        const { categoryId } = req.params;

        await Category.findByIdAndDelete(categoryId);

        const string = `Category ${categoryId} DELETED`;
        return res.status(200).json(string);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

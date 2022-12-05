import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategory(req: Request, res: Response) {
    try {
        const { categoryId } = req.params;

        const category = await Category.findById(categoryId);

        if(!category){
            return res.status(400).json({error: 'This category not exist'});
        }

        res.status(200).json(category);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}



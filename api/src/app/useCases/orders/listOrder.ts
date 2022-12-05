import {Request, Response} from 'express';

import { Order } from '../../models/Order';

export async function listOrder(req: Request, res: Response) {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId)
            .sort({ createdAt: 1 })    //  -1 = desc 1 = asc
            .populate('products.product');

        console.log(orderId);
        if(!order) {
            return res.status(400).json({error: 'This order not exists'});
        }


        res.status(200).json(order);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


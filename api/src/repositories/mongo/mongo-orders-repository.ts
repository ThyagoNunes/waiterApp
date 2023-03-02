import { Order } from '../../app/models/Order';
import { io } from '../..';

import {
  OrdersRepository,
  OrdersRepositoryChangeStatusData,
  OrdersRepositoryCreateData,
  OrdersRepositoryDeleteData,
  OrdersRepositoryShowData,
} from '../orders-repository';

export class MongoOrdersRepository implements OrdersRepository {
  async index() {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) //  -1 = desc 1 = asc
      .populate('products.product');

    return orders;
  }

  async show({ _id }: OrdersRepositoryShowData) {
    console.log({ _id });
    const order = await Order.findById({ _id })
      .sort({ createdAt: 1 })
      .populate('products.product');

    console.log(`order: ${order}`);
    return order;
  }

  async create({ order }: OrdersRepositoryCreateData) {
    const newOrder = await Order.create({
      table: order.table,
      products: order.products ? order.products : [],
    });
    const orderDetails = await newOrder.populate('products.product');
    io.emit('orders@new', orderDetails);
    return orderDetails;
  }

  async update(data: OrdersRepositoryChangeStatusData) {
    return null;
  }

  async delete(data: OrdersRepositoryDeleteData) {
    return null;
  }
}

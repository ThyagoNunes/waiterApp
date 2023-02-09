import { Order } from '../app/models/Order';
import { IOrder } from '../utils/order';

export interface OrdersRepositoryShowData {
  _id: string;
}

export interface OrdersRepositoryCreateData {
  order: IOrder;
}

export interface OrdersRepositoryChangeStatusData {
  _id: string;
  order: IOrder;
}

export interface OrdersRepositoryDeleteData {
  _id: string;
}

type Order = typeof Order;

export interface OrdersRepository {
  index: () => Promise<Order[] | any>;
  show: (data: OrdersRepositoryShowData) => Promise<Order | any>;
  create: (data: OrdersRepositoryCreateData) => Promise<Order | any>;
  update: (data: OrdersRepositoryChangeStatusData) => Promise<Order | any>;
  delete: (data: OrdersRepositoryDeleteData) => Promise<'' | any>;
}

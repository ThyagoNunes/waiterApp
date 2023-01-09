import { Order } from '../app/models/Order';
import { IOrder } from '../utils/order';

export interface OrdersRepositoryShowData {
  id: string;
}

export interface OrdersRepositoryCreateData {
  Order: IOrder;
}

export interface OrdersRepositoryChangeStatusData {
  id: string;
  Order: IOrder;
}

export interface OrdersRepositoryDeleteData {
  id: string;
}

type Order = typeof Order;

export interface OrdersRepository {
  index: () => Promise<Order[] | ''>;
  show: (data: OrdersRepositoryShowData) => Promise<Order | string>;
  create: (data: OrdersRepositoryCreateData) => Promise<Order>;
  update: (data: OrdersRepositoryChangeStatusData) => Promise<Order | string>;
  delete: (data: OrdersRepositoryDeleteData) => Promise<'' | string>;
}

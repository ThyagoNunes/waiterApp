import { OrdersRepository } from '../../repositories/orders-repository';

import { IOrder } from '../../utils/order';

export interface CreateOrderUseCaseData {
  order: IOrder | any;
}

export class CreateOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async create({ order }: CreateOrderUseCaseData) {
    console.log(`order inside use-case: ${order}`);
    const newOrder = await this.ordersRepository.create({ order });

    console.log(`newOrder final use-case: ${newOrder.table}`);
    return newOrder;
  }
}

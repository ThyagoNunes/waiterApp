import { OrdersRepository } from '../../repositories/orders-repository';

import { IOrder } from '../../utils/order';

export interface CreateOrderUseCaseData {
  order: IOrder | any;
}

export class CreateOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async create({ order }: CreateOrderUseCaseData) {
    const newOrder = await this.ordersRepository.create({ order });

    return newOrder;
  }
}

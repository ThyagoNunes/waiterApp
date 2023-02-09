import { OrdersRepository } from '../../repositories/orders-repository';

export interface ListOrderUseCaseId {
  _id: string;
}

export class ListOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async show({ _id }: ListOrderUseCaseId) {
    const order = await this.ordersRepository.show({ _id });

    return order;
  }
}

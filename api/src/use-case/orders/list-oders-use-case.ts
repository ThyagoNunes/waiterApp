import { OrdersRepository } from '../../repositories/orders-repository';

export class ListOrdersUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async index() {
    try {
      const orders = await this.ordersRepository.index();

      return orders;
    } catch (error) {
      console.log(error);
    }
  }
}

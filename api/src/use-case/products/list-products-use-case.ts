import { ProductsRepository } from '../../repositories/products-repository';

export class ListProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async index() {
    try {
      const products = await this.productsRepository.index();

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

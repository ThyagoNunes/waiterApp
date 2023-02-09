import { ProductsRepository } from '../../repositories/products-repository';

export interface ListProductsUseCaseId {
  _id: string | any;
}

export class ListProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async show({ _id }: ListProductsUseCaseId) {
    try {
      const product = await this.productsRepository.show({ _id });
      return product!;
    } catch (error) {
      console.log(error);
    }
  }
}

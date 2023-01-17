import { ProductsRepository } from '../../repositories/products-repository';
import { IProduct } from '../../utils/product';

export interface CreateProductUseCaseNew {
  product: IProduct;
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async create(data: CreateProductUseCaseNew) {
    try {
      const newProduct = await this.productsRepository.create(data);

      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
}

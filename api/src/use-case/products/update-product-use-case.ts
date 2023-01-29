import { ProductsRepository } from '../../repositories/products-repository';
import { IProduct } from '../../utils/product';

export interface UpdateProductUseCaseUpdate {
  _id: string;
  product: IProduct;
}

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async update({ _id, product }: UpdateProductUseCaseUpdate) {
    try {
      return await this.productsRepository.update({ _id, product });
    } catch (error) {
      console.log(error);
    }
  }
}

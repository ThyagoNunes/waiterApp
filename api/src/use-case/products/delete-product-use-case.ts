import { ProductsRepository } from '../../repositories/products-repository';

export interface DeleteProductUseCaseId {
  _id: string;
}

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async delete({ _id }: DeleteProductUseCaseId) {
    try {
      return await this.productsRepository.delete({ _id });
    } catch (error) {
      console.log(error);
    }
  }
}

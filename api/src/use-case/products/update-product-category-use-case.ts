import { ProductsRepository } from '../../repositories/products-repository';

export interface UpdateProductCategoryUseCaseId {
  _id: string | any;
  _idCategory: string | any;
}

export class UpdateProductCategoryUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async updateCategory(data: UpdateProductCategoryUseCaseId) {
    try {
      return await this.productsRepository.updateCategory(data);
    } catch (error) {
      console.log(error);
    }
  }
}

/* import { ProductsRepository } from '../../repositories/products-repository';

export interface UpdateProductCategoryUseCaseId {
  _id: string | any;
  _idCategory: string;
}

export class UpdateProductCategoryUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async updateCategory({ _id, _idCategory }: UpdateProductCategoryUseCaseId) {
    try {
      return await this.productsRepository.updateCategory({ _id, _idCategory });
    } catch (error) {
      console.log(error);
    }
  }
}
 */

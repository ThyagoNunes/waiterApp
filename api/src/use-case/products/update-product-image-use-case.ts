import { ProductsRepository } from '../../repositories/products-repository';

export interface UpdateProductImageUseCaseId {
  _id: string | any;
  imagePath: string | any;
}

export class UpdateProductImageUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async updateCategory(data: UpdateProductImageUseCaseId) {
    try {
      return await this.productsRepository.updateImage(data);
    } catch (error) {
      console.log(error);
    }
  }
}

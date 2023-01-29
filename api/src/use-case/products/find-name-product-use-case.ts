import { ProductsRepository } from '../../repositories/products-repository';

export interface FindNameProductUseCaseData {
  name: string | any;
}

export class FindNameProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async findByName(data: FindNameProductUseCaseData) {
    try {
      return await this.productsRepository.findByName(data.name);
    } catch (error) {
      console.log(error);
    }
  }
}

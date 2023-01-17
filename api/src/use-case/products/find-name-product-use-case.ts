import { ProductsRepository } from '../../repositories/products-repository';

export interface FindNameProductUseCaseData {
  name: string;
}

export class FindNameProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async findByName({ name }: FindNameProductUseCaseData) {
    try {
      const findProductName = await this.productsRepository.findByName({
        name,
      });

      console.log(`find-name-product-use-case ${findProductName}`);

      return findProductName;
    } catch (error) {
      console.log(error);
    }
  }
}

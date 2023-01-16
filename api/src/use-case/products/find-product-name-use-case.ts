import { ProductsRepository } from '../../repositories/products-repository';

export interface FindProductNameUseCaseData {
  name: string;
}

export class FindProductNameUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async findByName({ name }: FindProductNameUseCaseData) {
    try {
      const findProductName = await this.productsRepository.findByName({
        name,
      });

      console.log(`find-product-name-use-case ${findProductName}`);
      return findProductName;
    } catch (error) {
      console.log(error);
    }
  }
}

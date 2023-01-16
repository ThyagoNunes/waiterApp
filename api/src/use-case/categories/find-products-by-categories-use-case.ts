import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindProductsByCategoryUseCaseId {
  _id: string;
}

export class FindProductsByCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findByName({ _id }: FindProductsByCategoryUseCaseId) {
    try {
      const productsByCategory = await this.categoriesRepository.indexProducts({
        _id,
      });
      return productsByCategory;
    } catch (error) {
      console.log(error);
    }
  }
}

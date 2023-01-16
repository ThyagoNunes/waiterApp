import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindNameCategoryUseCaseName {
  name: string;
}

export class FindNameCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findByName({ name }: FindNameCategoryUseCaseName) {
    try {
      const nameCategory = await this.categoriesRepository.findByName({
        name,
      });
      return nameCategory;
    } catch (error) {
      console.log(error);
    }
  }
}

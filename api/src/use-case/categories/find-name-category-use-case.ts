import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindNameCategoryUseCaseName {
  name: string | any;
}

export class FindNameCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findByName({ name }: FindNameCategoryUseCaseName) {
    try {
      await this.categoriesRepository.findByName({ name });

      return name;
    } catch (error) {
      console.log(error);
    }
  }
}

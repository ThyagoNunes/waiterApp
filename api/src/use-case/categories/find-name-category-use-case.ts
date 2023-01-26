import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindNameCategoryUseCaseName {
  name: string | boolean | any;
}

export class FindNameCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findByName(data: FindNameCategoryUseCaseName) {
    try {
      await this.categoriesRepository.findByName(data.name);

      return data.name;
    } catch (error) {
      console.log(error);
    }
  }
}

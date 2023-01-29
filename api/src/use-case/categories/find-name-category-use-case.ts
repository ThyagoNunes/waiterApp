import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindNameCategoryUseCaseName {
  name: string | any;
  icon: string | any;
}

export class FindNameCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findByName(data: FindNameCategoryUseCaseName) {
    try {
      return await this.categoriesRepository.findByName(data.name);
    } catch (error) {
      console.log(error);
    }
  }
}

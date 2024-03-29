import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindCategoryUseCaseId {
  _idCategory: string | any;
}

export class FindIdCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findById(data: FindCategoryUseCaseId) {
    try {
      const category = await this.categoriesRepository.findById(data);
      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

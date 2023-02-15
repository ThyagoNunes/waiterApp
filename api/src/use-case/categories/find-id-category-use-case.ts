import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindCategoryUseCaseId {
  _idCategory: string | any;
}

export class FindIdCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findById(data: FindCategoryUseCaseId) {
    try {
      console.log(`INSIDE USECASE: ${data._idCategory}`);
      const category = await this.categoriesRepository.findById(data);
      console.log(`category: ${category}`);
      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindCategoryUseCaseId {
  _idCategory: string | any;
}

export class FindIdCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findById({ _idCategory }: FindCategoryUseCaseId) {
    try {
      console.log(`_idCategory:${_idCategory}`);
      const category = await this.categoriesRepository.findById({
        _idCategory,
      });
      console.log(`category: ${category}`);
      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

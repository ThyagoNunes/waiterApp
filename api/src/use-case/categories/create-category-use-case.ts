import { CategoriesRepository } from '../../repositories/categories-repository';

import { ICategory } from '../../utils/category';

export interface CreateCategoryUseCaseNew {
  category: ICategory;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async create(data: CreateCategoryUseCaseNew) {
    try {
      const { category } = data;
      const newCategory = await this.categoriesRepository.create({ category });

      return newCategory;
    } catch (error) {
      console.log(error);
    }
  }
}

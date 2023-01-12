import { CategoriesRepository } from '../../repositories/categories-repository';

import { ICategory } from '../../utils/category';

interface CreateCategoryUseCaseNew {
  category: ICategory;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository);

  async create({ category }: CreateCategoryUseCaseNew) {
    const {  } =
  }
}

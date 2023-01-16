import { CategoriesRepository } from '../../repositories/categories-repository';

import { ICategory } from '../../utils/category';

export interface UpdateCategoryUseCaseId {
  _id: string;
  category: ICategory;
}

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async update({ _id, category }: UpdateCategoryUseCaseId) {
    const updateCategory = await this.categoriesRepository.update({
      _id,
      category: {
        name: category.name,
        icon: category.icon,
      },
    });

    return updateCategory;
  }
}

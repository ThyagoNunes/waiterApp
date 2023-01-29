import { CategoriesRepository } from '../../repositories/categories-repository';

import { ICategory } from '../../utils/category';

export interface UpdateCategoryUseCaseId {
  _id: string;
  category: ICategory;
}

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async update({ _id, category }: UpdateCategoryUseCaseId) {
    const name = category.name;
    const icon = category.icon;
    return await this.categoriesRepository.update({
      _id,
      category: {
        name: name,
        icon: icon,
      },
    });

    // console.log(`updateCategory: ${updateCategory}`);

    // return updateCategory;
  }
}

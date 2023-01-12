import { CategoriesRepository } from '../../repositories/categories-repository';

export interface ListCategoryUseCaseId {
  _id: string;
}

export class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async show({ _id }: ListCategoryUseCaseId) {
    try {
      const category = await this.categoriesRepository.show({ _id });
      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

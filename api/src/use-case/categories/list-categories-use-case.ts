import { CategoriesRepository } from '../../repositories/categories-repository';

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async index() {
    try {
      const categories = await this.categoriesRepository.index();

      return categories;
    } catch (error) {
      console.log(error);
    }
  }
}

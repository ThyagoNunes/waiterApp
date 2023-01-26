import { CategoriesRepository } from '../../repositories/categories-repository';

export class ListCategoriesNamesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findAllName() {
    const names = await this.categoriesRepository.findAllNames();

    return names;
  }
}

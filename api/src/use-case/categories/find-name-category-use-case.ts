import { CategoriesRepository } from '../../repositories/categories-repository';

export interface FindNameCategoryUseCaseName {
  name: string;
}

export class FindNameCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async findByName({ name }: FindNameCategoryUseCaseName) {
    try {
      const findName = await this.categoriesRepository.findByName({ name });

      console.log('chegou 2');
      return findName;
    } catch (error) {
      console.log(error);
    }
  }
}

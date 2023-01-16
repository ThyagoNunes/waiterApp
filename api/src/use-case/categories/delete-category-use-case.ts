import { CategoriesRepository } from '../../repositories/categories-repository';

export interface DeleteCategoryUseCaseId {
  _id: string;
}

export class DeleteCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async delete({ _id }: DeleteCategoryUseCaseId) {
    await this.categoriesRepository.delete({ _id });
    return;
  }
}

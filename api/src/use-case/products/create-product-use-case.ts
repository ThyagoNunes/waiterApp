import { ProductsRepository } from '../../repositories/products-repository';
import { IProduct } from '../../utils/product';

export interface CreateProductUseCaseNew {
  product: IProduct;
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async create({ product }: CreateProductUseCaseNew) {
    try {
      const newProduct = await this.productsRepository.create({
        name: JSON.stringify(product.name),
        description: product.description,
        imagePath: product.imagePath,
        price: Number(product.price),
        ingredients: product.ingredients ? product.ingredients : [],
        category: product.category,
      });

      console.log(`create-product-use-case ${newProduct}`);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
}

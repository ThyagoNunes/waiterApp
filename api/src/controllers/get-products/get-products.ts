import { IGetProductsController, IGetProductsRepository } from './protocols';

export class GetProductsController implements IGetProductsController {
  // This connect with database
  constructor(private readonly getProductsRepository: IGetProductsRepository) {}

  async handle() {
    // validar requisição

    try {
      // direcionar chamada para repository
      const products = await this.getProductsRepository.getProducts();

      return {
        statusCode: 200,
        body: products,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong',
      };
    }
  }
}

import { IProduct } from '../../../utils/product';
import { HttpRequest, HttpResponse } from '../../protocols';
import { IFindProductNameRepository } from '../find-product-name/protocols';
import {
  ICreateProductController,
  ICreateProductRepository,
  ICreateProductRepositoryParams,
} from './protocols';

export class CreateProductController implements ICreateProductController {
  constructor(
    private readonly createProductRepository: ICreateProductRepository, // private readonly getProductRepository: IProductGetRepository
    private readonly findProductNameRepository: IFindProductNameRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<ICreateProductRepositoryParams>
  ): Promise<HttpResponse<IProduct>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: 'Please specify a body',
        };
      }

      const { name } = httpRequest.body;
      const findProductName = await this.findProductNameRepository.getName(
        name
      );

      const product = await this.createProductRepository.createProduct(
        httpRequest.body
      );

      return {
        statusCode: 201,
        body: product,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong',
      };
    }
  }
}

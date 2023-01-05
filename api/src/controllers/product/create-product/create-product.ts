import { IProduct } from '../../../utils/product';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IProductCreateController,
  ICreateProductRepository,
  ICreateProductRepositoryParams,
} from './protocols';

/* import {
    ,
} from '../get-product/protocols' */

export class CreateProductController implements IProductCreateController {
  constructor(
    private readonly createProductRepository: ICreateProductRepository // private readonly getProductRepository: IProductGetRepository
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

      //   const findProductName = await this.

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

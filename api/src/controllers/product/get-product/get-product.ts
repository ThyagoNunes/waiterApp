import { IProduct } from '../../../utils/product';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IGetProductController,
  IGetProductRepository,
  IGetProductRepositoryParams,
} from './protocols';

export class GetProductController implements IGetProductController {
  constructor(
    private readonly getProductRepository: IGetProductRepository // private readonly <3
  ) {}
  async handle(
    httpRequest: HttpRequest<IGetProductRepositoryParams>
  ): Promise<HttpResponse<IProduct>> {
    try {
      const { idProduct } = httpRequest.params;

      const product = await this.getProductRepository.getProduct(idProduct);

      if (!product) {
        return {
          statusCode: 404,
          body: 'This Product not exists',
        };
      }

      return {
        statusCode: 200,
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

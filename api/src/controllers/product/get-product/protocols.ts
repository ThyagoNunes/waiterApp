import { IProduct } from '../../../utils/product';
import { HttpRequest, HttpResponse } from '../../protocols';

export interface IGetProductController {
  handle(
    httpRequest: HttpRequest<IGetProductRepositoryParams>
  ): Promise<HttpResponse<IProduct>>;
}

export interface IGetProductRepositoryParams {
  idProduct: string;
}

export interface IGetProductRepository {
  getProduct(idProduct: IGetProductRepositoryParams): Promise<IProduct>;
}

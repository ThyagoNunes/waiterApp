import { IProduct } from '../../../utils/product';
import { HttpRequest, HttpResponse } from '../../protocols';

export interface IFindProductNameController {
  handle(
    httpRequest: HttpRequest<IFindProductNameRepositoryParams>
  ): Promise<HttpResponse<IProduct>>;
}

export interface IFindProductNameRepositoryParams {
  nameProduct: string;
}

export interface IFindProductNameRepository {
  getName(nameProduct: IFindProductNameRepositoryParams): Promise<IProduct>;
}

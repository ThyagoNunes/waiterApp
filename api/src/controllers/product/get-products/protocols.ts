import { IProduct } from '../../../utils/product';
import { HttpResponse } from '../../protocols';

export interface IGetProductsController {
  handle(): Promise<HttpResponse<IProduct[]>>;
}

export interface IGetProductsRepository {
  getProducts(): Promise<IProduct[]>;
}

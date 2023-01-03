import { Product } from '../../app/utils/product';
import { HttpResponse } from '../protocols';

export interface IGetProductsController {
  handle(): Promise<HttpResponse<Product[]>>;
}

export interface IGetProductsRepository {
  getProducts(): Promise<Product[]>;
}

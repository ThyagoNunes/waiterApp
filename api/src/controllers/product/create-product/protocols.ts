import { HttpRequest, HttpResponse } from '../../protocols';
import { IProduct } from '../../../utils/product';

export interface IProductCreateController {
  handle(
    httpRequest: HttpRequest<ICreateProductRepositoryParams>
  ): Promise<HttpResponse<IProduct>>;
}

export interface ICreateProductRepositoryParams {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients?: {
    name: string;
    icon: string;
  }[];
  category: string;
}

export interface ICreateProductRepository {
  createProduct({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: ICreateProductRepositoryParams): Promise<IProduct>;
}

import { Product } from '../../app/models/Product';
import { IProduct } from '../../utils/product';

import {
  IGetProductRepository,
  IGetProductRepositoryParams,
} from '../../controllers/product/get-product/protocols';

export class MongoGetProduct implements IGetProductRepository {
  async getProduct(idProduct: IGetProductRepositoryParams): Promise<IProduct> {
    const product = await Product.findById(idProduct);

    return product;
  }
}

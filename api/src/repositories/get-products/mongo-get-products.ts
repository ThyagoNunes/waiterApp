import { Product } from '../../app/models/Product';
import { IProduct } from '../../utils/product';
import { IGetProductsRepository } from '../../controllers/product/get-products/protocols';

export class MongoGetProducts implements IGetProductsRepository {
  async getProducts(): Promise<IProduct[]> {
    const products = await Product.find();

    return products;
  }
}

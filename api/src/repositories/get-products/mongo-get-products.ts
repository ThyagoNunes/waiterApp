import { Product } from '../../app/models/Product';
import { IProduct } from '../../app/utils/product';
import { IGetProductsRepository } from '../../controllers/get-products/protocols';

export class MongoGetProductsRepository implements IGetProductsRepository {
  async getProducts(): Promise<IProduct[]> {
    const products = await Product.find();

    return products;
  }
}

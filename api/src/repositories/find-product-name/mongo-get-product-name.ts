import { Product } from '../../app/models/Product';
import { IProduct } from '../../utils/product';

import {
  IFindProductNameRepository,
  IFindProductNameRepositoryParams,
} from '../../controllers/product/find-product-name/protocols';

export class MongoFindProductName implements IFindProductNameRepository {
  async getName(
    nameProduct: IFindProductNameRepositoryParams
  ): Promise<IProduct | any> {
    const findNameProduct = await Product.findById(nameProduct);

    return findNameProduct;
  }
}

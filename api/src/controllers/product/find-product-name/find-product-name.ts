import { IProduct } from '../../../utils/product';
import { HttpRequest, HttpResponse } from '../../protocols';
import {
  IFindProductNameController,
  IFindProductNameRepository,
  IFindProductNameRepositoryParams,
} from './protocols';

export class FindProductNameController implements IFindProductNameController {
  constructor(
    private readonly findProductNameRepository: IFindProductNameRepository // private readonly <3
  ) {}
  async handle(
    httpRequest: HttpRequest<IFindProductNameRepositoryParams>
  ): Promise<HttpResponse<IProduct>> {
    try {
      const { nameProduct } = httpRequest.params;

      const product = await this.findProductNameRepository.getName(nameProduct);

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

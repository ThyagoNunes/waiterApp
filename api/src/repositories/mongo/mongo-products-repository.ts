import { Product } from '../../app/models/Product';

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
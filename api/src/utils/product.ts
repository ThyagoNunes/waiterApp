export interface IProduct {
  _id?: string;
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

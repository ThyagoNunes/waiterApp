export interface IProduct {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients?: {
    name: string;
    icon: string;
  }[];
  category: string | any;
}

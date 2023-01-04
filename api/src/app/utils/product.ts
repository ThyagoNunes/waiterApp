export interface IProduct {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
  }[];
  category: any;
}

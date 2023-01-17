export interface IProduct {
  _id?: string;
  name: string;
  description: string | any;
  imagePath: string | any;
  price: number | any;
  ingredients?: {
    name: string | any;
    icon: string | any;
  }[];
  category: string | any;
}

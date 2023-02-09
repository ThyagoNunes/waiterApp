export interface IProduct {
  _id?: string;
  name: string;
  description: string | null;
  imagePath: string;
  price: number;
  ingredients?:
    | {
        ingredient?: string | any;
        icon?: string | any;
      }[]
    | any;
  category: string;
}

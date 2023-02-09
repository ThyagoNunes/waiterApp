export interface IOrder {
  table: number;
  status: ['WAITING', 'IN_PRODUCTION', 'DONE'];
  products: {
    product: string | any;
    quantity: number;
  }[];
}

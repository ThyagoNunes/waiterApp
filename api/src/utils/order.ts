export interface IOrder {
  table: string | any;
  status: ['WAITING', 'IN_PRODUCTION', 'DONE'];
  products: {
    product: string | any;
    quantity: number;
  }[];
}

export interface Order {
    _id: string;  // id gerado para o pedido
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';   // enum 3 cases
    products: {     // object with products
        _id: string; // pass id product wished
        quantity: number; // pass quantity wished
        product: {      // in base _id PRODUCTS, this returns info product
            name: string; // name product
            imagePath: string; // path image product
            price: number; // price product
        };
    }[]
}

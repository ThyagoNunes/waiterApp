import { model, Schema } from 'mongoose';

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['WAITING', 'IN_PRODUCTION', 'DONE'], // SÓ PODEM SER ESSES VALORES
      default: 'WAITING', // default
    },
    createdAt: {
      type: Date,
      default: Date.now, // sem função para chamar na hora exata do req
    },
    products: {
      // object
      required: true,
      type: [
        {
          // array object
          product: {
            type: Schema.Types.ObjectId, // id
            required: true,
            ref: 'Product', // fk table product
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);

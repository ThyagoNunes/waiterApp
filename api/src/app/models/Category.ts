import { model, Schema } from 'mongoose';

export const Category = model(
  'Category',
  new Schema({
    name: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
);

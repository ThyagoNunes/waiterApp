import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listCategory } from './app/useCases/categories/listCategory';
import { updateCategory } from './app/useCases/categories/updateCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProduct } from './app/useCases/products/listProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { updateProduct } from './app/useCases/products/updateProduct';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { listOrders } from './app/useCases/orders/listOrders';
import { listOrder } from './app/useCases/orders/listOrder';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({     // upload arquivos
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../', 'uploads'));
    },
    filename(req, file, callback) {     // FILENAME FOLLOW STANDARD
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// List categoriy
router.get('/categories/:categoryId', listCategory);

// Create category
router.post('/categories', createCategory);

// Update category
router.put('/categories/:categoryId', updateCategory);

// Delete category
router.delete('/categories/:categoryId', deleteCategory);

// List products
router.get('/products', listProducts);

// list product
router.get('/products/:productId', listProduct);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Update product
router.put('/products/:productId', upload.single('image'), updateProduct);

// Delete product
router.delete('/products/:productId', deleteProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// List order
router.get('/orders/:orderId', listOrder);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel order
router.delete('/orders/:orderId', cancelOrder);

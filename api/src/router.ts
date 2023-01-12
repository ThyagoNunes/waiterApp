import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
// import { listCategory } from './app/useCases/categories/listCategory';
import { updateCategory } from './app/useCases/categories/updateCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { updateProduct } from './app/useCases/products/updateProduct';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { listOrders } from './app/useCases/orders/listOrders';
import { listOrder } from './app/useCases/orders/listOrder';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { changeProductCategory } from './app/useCases/products/changeProductCategory';
import { changeProductImagePath } from './app/useCases/products/changeProductImagePath';

import { ListCategoriesUseCase } from './use-case/categories/list-categories-use-case';

import { MongoCategoriesRepository } from './repositories/mongo/mongo-categories-repository';
import { ListCategoryUseCase } from './use-case/categories/list-category-use-case';

export const router = Router();

const upload = multer({
  // upload arquivos
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../', 'uploads'));
    },
    filename(req, file, callback) {
      // FILENAME FOLLOW STANDARD
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', async (req, res) => {
  const mongoCategoriesRepositories = new MongoCategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(
    mongoCategoriesRepositories
  );
  const categories = await listCategoriesUseCase.index();

  return res.status(200).send({ categories });
});

// List categoriy
router.get('/categories/:_id', async (req, res) => {
  const { _id } = req.params;

  const mongoCategoriesRepository = new MongoCategoriesRepository();
  const listCategoryUseCase = new ListCategoryUseCase(
    mongoCategoriesRepository
  );

  const category = await listCategoryUseCase.show({ _id });

  if (!category) {
    return res.status(400).json('Category not found');
  }
  res.status(200).send({ category });
});

// Create category
router.post('/categories', createCategory);

// Update category
router.put('/categories/:categoryId', updateCategory);

// Delete category
router.delete('/categories/:categoryId', deleteCategory);

// List products
/* router.get('/products', async (req, res) => {
  const mongoGetProductsRepository = new MongoGetProducts();
  const getProductsControler = new GetProductsController(
    mongoGetProductsRepository
  );
  const { body, statusCode } = await getProductsControler.handle();

  res.send(body).status(statusCode);
}); */

// list product GetProductController
/* router.get('/products/:idProduct', async (req, res) => {
  const { idProduct } = req.params;

  const mongoGetProductRepository = new MongoGetProduct();
  const getProductController = new GetProductController(
    mongoGetProductRepository
  );

  const product = await getProductController.handle({ params: { idProduct } });

  res.send({ product }).status(200);
}); */

// Create product
router.post('/products', upload.single('image'), createProduct);

// Update product
router.put('/products/:productId', upload.single('image'), updateProduct);

// Change category product
router.patch('/products/:productId', changeProductCategory);

// Change imagepath product
router.patch('/uploads/:productId', changeProductImagePath);

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

// import { listProducts } from './app/useCases/products/listProducts';
// import { listProduct } from './app/useCases/products/listProduct';

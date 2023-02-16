/* eslint-disable no-empty-pattern */
import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

// import { createCategory } from './app/useCases/categories/createCategory';
// import { listCategory } from './app/useCases/categories/listCategory';
//import { updateCategory } from './app/useCases/categories/updateCategory';
//import { deleteCategory } from './app/useCases/categories/deleteCategory';
//import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
// import { listProducts } from './app/useCases/products/listProducts';
//import { createProduct } from './app/useCases/products/createProduct';
// import { updateProduct } from './app/useCases/products/updateProduct';
// import { deleteProduct } from './app/useCases/products/deleteProduct';
// import { listOrders } from './app/useCases/orders/listOrders';
// import { listOrder } from './app/useCases/orders/listOrder';
// import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
// import { changeProductCategory } from './app/useCases/products/changeProductCategory';
import { changeProductImagePath } from './app/useCases/products/changeProductImagePath';

import { MongoCategoriesRepository } from './repositories/mongo/mongo-categories-repository';
import { MongoProductsRepository } from './repositories/mongo/mongo-products-repository';
import { MongoOrdersRepository } from './repositories/mongo/mongo-orders-repository';

import { ListCategoriesUseCase } from './use-case/categories/list-categories-use-case';
import { CreateCategoryUseCase } from './use-case/categories/create-category-use-case';
import { FindNameCategoryUseCase } from './use-case/categories/find-name-category-use-case';
import { UpdateCategoryUseCase } from './use-case/categories/update-category-use-case';
import { DeleteCategoryUseCase } from './use-case/categories/delete-category-use-case';
import { ListCategoryUseCase } from './use-case/categories/list-category-use-case';

import { ListProductsUseCase } from './use-case/products/list-products-use-case';
import { ListProductUseCase } from './use-case/products/list-product-use-case';
import { FindProductsByCategoryUseCase } from './use-case/categories/find-products-by-categories-use-case';
import { CreateProductUseCase } from './use-case/products/create-product-use-case';
import { FindNameProductUseCase } from './use-case/products/find-name-product-use-case';
import { UpdateProductUseCase } from './use-case/products/update-product-use-case';
import { UpdateProductCategoryUseCase } from './use-case/products/update-product-category-use-case';
import { DeleteProductUseCase } from './use-case/products/delete-product-use-case';

import { ListOrdersUseCase } from './use-case/orders/list-oders-use-case';
import { ListOrderUseCase } from './use-case/orders/list-order-use-case';
import { CreateOrderUseCase } from './use-case/orders/create-order-user-case';
import { FindIdCategoryUseCase } from './use-case/categories/find-id-category-use-case';
import { UpdateProductImageUseCase } from './use-case/products/update-product-image-use-case';

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

  return res.status(200).send(categories);
});

// List category
router.get('/categories/:_id', async (req, res) => {
  const { _id } = req.params;

  const mongoCategoriesRepository = new MongoCategoriesRepository();
  const listCategoryUseCase = new ListCategoryUseCase(
    mongoCategoriesRepository
  );

  const category = await listCategoryUseCase.show({ _id });

  if (!category) {
    return res.status(400).json({ error: `This category ${_id} not exists` });
  }
  res.status(200).send(category);
});

// Create category
router.post('/categories', async (req, res) => {
  const { name, icon } = req.body;

  if (!name && !icon) {
    return res.status(400).json({ error: 'NAME & ICON is required' });
  }
  const mongoCategoriesRepository = new MongoCategoriesRepository();

  const findNameCategoryUseCase = new FindNameCategoryUseCase(
    mongoCategoriesRepository
  );

  const nameReturned = await findNameCategoryUseCase.findByName({
    name,
    icon,
  });

  if (nameReturned) {
    return res.status(400).send(`Name ${name} is already exists`);
  }

  const createCategoryUseCase = new CreateCategoryUseCase(
    mongoCategoriesRepository
  );

  const newCategory = await createCategoryUseCase.create({
    category: { name, icon },
  });

  return res.status(200).send(newCategory);
});

// Updated category
router.put('/categories/:_id', async (req, res) => {
  const { _id } = req.params;
  const { name, icon } = req.body;

  const category = { name, icon };

  if (!name || !icon) {
    return res.status(400).json({ error: 'NAME & ICON is required' });
  }

  const mongoCategoriesRepository = new MongoCategoriesRepository();
  const listCategoryUseCase = new ListCategoryUseCase(
    mongoCategoriesRepository
  );

  const categoryExists = await listCategoryUseCase.show({ _id });

  if (!categoryExists) {
    return res.status(400).json({ error: 'Category not found' });
  }
  const findNameCategoryUseCase = new FindNameCategoryUseCase(
    mongoCategoriesRepository
  );

  const nameCategoryExists = await findNameCategoryUseCase.findByName({
    name,
    icon,
  });

  const updateCategoryUseCase = new UpdateCategoryUseCase(
    mongoCategoriesRepository
  );
  const updatedCategory = await updateCategoryUseCase.update({ _id, category });

  if (name !== categoryExists.name && nameCategoryExists) {
    return res.status(400).json({ error: 'This category is already exists' });
  }

  if (!nameCategoryExists) {
    const nameAtt = {
      _id,
      name,
      icon,
    };
    return res.status(200).send(nameAtt);
  }

  return res.status(200).send(updatedCategory);
});

// Delete category
router.delete('/categories/:_id', async (req, res) => {
  const { _id } = req.params;

  const mongoCategoriesRepository = new MongoCategoriesRepository();

  const listCategoryUseCase = new ListCategoryUseCase(
    mongoCategoriesRepository
  );

  const categoryExists = await listCategoryUseCase.show({ _id });

  if (!categoryExists) {
    return res.status(400).json({ error: 'This category not exists' });
  }

  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    mongoCategoriesRepository
  );

  await deleteCategoryUseCase.delete({ _id });
  res.status(204).json({ DELETED: 'ok' });
});

// List products by category
router.get('/categories/:_id/products', async (req, res) => {
  const { _id } = req.params;

  if (!_id) {
    return res.status(400).json({ error: '_idCategory is required' });
  }

  const mongoCategoriesRepository = new MongoCategoriesRepository();
  const listCategoryUseCase = new ListCategoryUseCase(
    mongoCategoriesRepository
  );

  const categoryExists = await listCategoryUseCase.show({ _id });

  if (!categoryExists) {
    return res.status(400).json({ error: 'This category not exists' });
  }

  const findProductsByCategoriesUseCase = new FindProductsByCategoryUseCase(
    mongoCategoriesRepository
  );

  const productsByCategory = await findProductsByCategoriesUseCase.findByName({
    _id,
  });

  res.status(200).send(productsByCategory);
});

// List products
router.get('/products', async (req, res) => {
  const mongoProductsRepository = new MongoProductsRepository();
  const listProductsUseCase = new ListProductsUseCase(mongoProductsRepository);

  const products = await listProductsUseCase.index();

  res.status(200).send(products);
});

// List product
router.get('/products/:_id', async (req, res) => {
  const { _id } = req.params;

  const mongoProductsRepository = new MongoProductsRepository();

  const listProductUseCase = new ListProductUseCase(mongoProductsRepository);
  const product = await listProductUseCase.show({ _id });

  res.status(200).send(product);
});

// Create product
router.post('/products', upload.single('image'), async (req, res) => {
  const imagePath = req.file?.filename;

  const { name, description, price, ingredients, category } = req.body;

  const product = {
    name,
    description,
    imagePath,
    price,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    category: category,
  };

  if (!name || !description || !imagePath || !price || !category) {
    return res.status(400).json({
      error:
        'Inputs NAME, DESCRIPTION, IMAGEPATH, PRICE && CATEGORY ARE REQUIRED',
    });
  }

  const mongoProductsRepository = new MongoProductsRepository();
  const mongoCategoriesRepository = new MongoCategoriesRepository();
  const findNameProductUseCase = new FindNameProductUseCase(
    mongoProductsRepository
  );

  const productReturned = await findNameProductUseCase.findByName({ name });

  const findIdCategoryUseCase = new FindIdCategoryUseCase(
    mongoCategoriesRepository
  );

  const _idCategory = product.category;
  const nameCategory = await findIdCategoryUseCase.findById({ _idCategory });

  if (nameCategory === undefined) {
    return res
      .status(400)
      .json({ error: `This category ${category} not exists` });
  }

  if (name === productReturned) {
    return res
      .status(400)
      .json({ error: `This name ${name} is already exists` });
  }
  const createProductUseCase = new CreateProductUseCase(
    mongoProductsRepository
  );

  const newProduct = await createProductUseCase.create({ product });

  console.log(`newProduct: ${newProduct}`);

  res.status(200).send(newProduct);
});

// Update product
router.put('/products/:_id', upload.single('image'), async (req, res) => {
  const imagePath = req.file?.filename;
  const { _id } = req.params;
  const { name, description, price, ingredients, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({
      error: 'NAME, DESCRIPTION, IMAGEPATH, PRICE && CATEGORY are reequired',
    });
  }

  const product = {
    name,
    description,
    imagePath,
    price,
    ingredients,
    category,
  };

  const mongoProductsRepository = new MongoProductsRepository();
  const mongoCategoriesRepository = new MongoCategoriesRepository();

  const listProductUseCase = new ListProductUseCase(mongoProductsRepository);

  const objProduct = await listProductUseCase.show({ _id });

  if (!objProduct) {
    return res.status(400).json({ error: 'Product not found ' });
  }

  const findNameProductUseCase = new FindNameProductUseCase(
    mongoProductsRepository
  );

  const findIdCategoryUseCase = new FindIdCategoryUseCase(
    mongoCategoriesRepository
  );

  const nameProduct = await findNameProductUseCase.findByName({ name });

  const _idCategory = product.category;
  const nameCategory = await findIdCategoryUseCase.findById({ _idCategory });

  if (nameCategory === undefined) {
    return res
      .status(400)
      .json({ error: `This category ${category} not exists` });
  }

  const updateProductUseCase = new UpdateProductUseCase(
    mongoProductsRepository
  );

  await updateProductUseCase.update({ _id, product });

  if (name !== objProduct.name && nameProduct) {
    return res.status(400).json({ error: 'This product is already exists' });
  }

  if (!nameProduct) {
    return res.status(200).send({
      _id,
      name,
      description,
      imagePath,
      price,
      ingredients,
      category,
    });
  }

  const productUpdated = {
    _id: _id,
    name: name,
    description: description,
    imagePath: imagePath,
    price: Number(price),
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    category: category,
  };

  res.status(200).send(productUpdated);
});

router.delete('/products/:_id', async (req, res) => {
  const { _id } = req.params;

  const mongoProductsRepository = new MongoProductsRepository();
  const listProductUseCase = new ListProductUseCase(mongoProductsRepository);

  const product = await listProductUseCase.show({ _id });

  if (!product) {
    return res.status(400).json({ error: 'This product not exists' });
  }

  const deleteProductUseCase = new DeleteProductUseCase(
    mongoProductsRepository
  );

  await deleteProductUseCase.delete({ _id });

  res.status(204).send({ deleted: 'ok' });
});

// Change image product
router.patch(
  '/products/changes/image/:_id',
  upload.single('image'),
  async (req, res) => {
    const { _id } = req.params;
    const imagePath = req.file?.filename;

    if (!imagePath) {
      return res.status(400).json({ error: 'imagePath is required' });
    }

    const mongoProductsRepository = new MongoProductsRepository();
    const listProductUseCase = new ListProductUseCase(mongoProductsRepository);

    const product = await listProductUseCase.show({ _id });

    if (!product) {
      return res.status(404).json({ error: `This product ${_id} not exists` });
    }

    const updateProductImageUseCase = new UpdateProductImageUseCase(
      mongoProductsRepository
    );

    updateProductImageUseCase.updateCategory({
      _id,
      imagePath,
    });

    const productUpdated = {
      _id: product._id,
      name: product.name,
      description: product.description,
      imagePath: imagePath,
      price: product.price,
      ingredients: product.ingredients ? product.ingredients : [],
      category: product.category,
    };
    res.status(200).send(productUpdated);
  }
);

// Change category product
router.patch('/products/changes/category/:_id', async (req, res) => {
  const { _id } = req.params;
  const { _idCategory } = req.body;

  if (!_idCategory) {
    return res.status(400).json({ error: '_idCategory is required' });
  }

  const mongoProductsRepository = new MongoProductsRepository();
  const listProductUseCase = new ListProductUseCase(mongoProductsRepository);

  const product = await listProductUseCase.show({ _id });
  if (!product) {
    return res.status(400).json({ error: 'This product not exists' });
  }

  const mongoCategoriesRepository = new MongoCategoriesRepository();
  const findIdCategoryUseCase = new FindIdCategoryUseCase(
    mongoCategoriesRepository
  );

  const category = await findIdCategoryUseCase.findById({ _idCategory });

  if (category === undefined) {
    return res.status(400).json({
      error: `This category ${_idCategory} not exists`,
    });
  }

  const updateProductCategoryUseCase = new UpdateProductCategoryUseCase(
    mongoProductsRepository
  );

  updateProductCategoryUseCase.updateCategory({
    _id,
    _idCategory,
  });

  const productUpdated = {
    _id: product._id,
    name: product.name,
    description: product.description,
    imagePath: product.imagePath,
    price: product.price,
    ingredients: product.ingredients ? product.ingredients : [],
    category: _idCategory,
  };

  res.status(200).send(productUpdated);
});

// Get products by category
//router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', async (req, res) => {
  const mongoOrdersRepository = new MongoOrdersRepository();
  const listOrdersUseCase = new ListOrdersUseCase(mongoOrdersRepository);

  const orders = await listOrdersUseCase.index();

  res.status(200).send(orders);
});

// List order
router.get('/orders/:_id', async (req, res) => {
  const { _id } = req.params;

  const mongoOrdersRepository = new MongoOrdersRepository();
  const listOrderUseCase = new ListOrderUseCase(mongoOrdersRepository);

  const orderExist = await listOrderUseCase.show({ _id });

  if (!orderExist) {
    return res.status(404).json({ error: `This ORDER: ${_id} not exist` });
  }

  res.status(200).send(orderExist);
});

//stay here
// Create order
router.post('/orders', async (req, res) => {
  const status = ['WAITING', 'IN_PRODUCTION', 'DONE'];
  const { table, products } = req.body;

  const order = {
    table: table,
    status: status,
    products: products ? JSON.parse(products) : [],
  };

  console.log(`products: ${products} `);
  /*
  const mongoOrdersRepository = new MongoOrdersRepository();
  const mongoProductsRepository = new MongoProductsRepository();


  const { name, description, price, ingredients, category } = req.body;

  const product = {
    name,
    description,
    imagePath,
    price,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    category: category,
  }; */

  console.log(`aaaa ${products.product}`);

  res.status(200).send(order);
});

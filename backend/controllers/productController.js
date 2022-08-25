import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.status(401);
  // throw new Error('Not authorized');
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Delete single product
// @route DELETE /api/products/:id
// @access Private/Admin
export const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    const removedProduct = await product.remove();

    res.json(removedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Create new product
// @route POST /api/products
// @access Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample-image.jpeg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    description: 'Sample description',
    numReviews: 0,
  });

  const createdProduct = await product.save();

  if (createdProduct) {
    res.status(201).json(createdProduct);
  } else {
    res.status(400);
    throw new Error('Invalid product');
  }
});

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, image, brand, category, description, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.description = description || product.description;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

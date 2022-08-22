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
// @route DELETE /api/products
// @access Private/Admin

export const createNewProduct = asyncHandler(async (req, res) => {
  const {} = req.body;
});

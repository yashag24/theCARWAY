import express from 'express';
const router=express.Router();

import {
    sellerRegister,
    sellerLogIn
} from '../controllers/sellerController.js';

import {
    productCreate,
    getProducts,
    getProductDetail,
    searchProduct,
    searchProductbyCategory,
    searchProductbySubCategory,
    getSellerProducts,
    updateProduct,
    deleteProduct,
    deleteProducts,
    deleteProductReview,
    deleteAllProductReviews,
    addReview,
    getInterestedCustomers,
    getAddedToCartProducts,
} from '../controllers/productController.js';

import {
    customerRegister,
    customerLogIn,
    getCartDetail,
    cartUpdate
} from '../controllers/customerController.js';

import {
    newOrder,
    getOrderedProductsByCustomer,
    getOrderedProductsBySeller
} from '../controllers/orderController.js';


// Seller
router.post('/SellerRegister', sellerRegister);
router.post('/SellerLogin', sellerLogIn);

// Product
router.post('/ProductCreate', productCreate);
router.get('/getSellerProducts/:id', getSellerProducts);
router.get('/getProducts', getProducts);
router.get('/getProductDetail/:id', getProductDetail);
router.get('/getInterestedCustomers/:id', getInterestedCustomers);
router.get('/getAddedToCartProducts/:id', getAddedToCartProducts);

router.put('/ProductUpdate/:id', updateProduct);
router.put('/addReview/:id', addReview);

router.get('/searchProduct/:key', searchProduct);
router.get('/searchProductbyCategory/:key', searchProductbyCategory);
router.get('/searchProductbySubCategory/:key', searchProductbySubCategory);

router.delete('/DeleteProduct/:id', deleteProduct);
router.delete('/DeleteProducts/:id', deleteProducts);
router.put('/deleteProductReview/:id', deleteProductReview);
router.delete('/deleteAllProductReviews/:id', deleteAllProductReviews);

// Customer
router.post('/CustomerRegister', customerRegister);
router.post('/CustomerLogin', customerLogIn);
router.get('/getCartDetail/:id', getCartDetail);
router.put('/CustomerUpdate/:id', cartUpdate);

// Order
router.post('/newOrder', newOrder);
router.get('/getOrderedProductsByCustomer/:id', getOrderedProductsByCustomer);
router.get('/getOrderedProductsBySeller/:id', getOrderedProductsBySeller);

export default router;
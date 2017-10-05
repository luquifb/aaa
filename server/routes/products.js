const express = require('express');
const router = express.Router();
const Product = require('./../models/Product');
const mongoose = require('mongoose');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const User   = require('../models/User');


// GET PRODUCT DATA
router.get('/product/:id', (req, res, next) => {
  const scope = {};
  Product.findById(req.params.id)
    .then (product => {
      scope.product = product;
      return User.find({ 'user' : product.title});
    })
    .then ( users => {
      res.render('products/product', { product: scope.product, users: users});
    });
});


// VIEW ALL PRODUCTS
router.get('/all-products' , (req, res, next) => {
  Product.find()
  .then(result => res.render('products/all-products-list', { products: result }))
  .reject (err => console.log(err));
});


//SHOW CREATE PRODUCT PAGE
router.get('/create-product', (req, res, next) => {
  res.render('products/create-product', {
    errorMessage: ''
  });
});


//CREATE PRODUCT IN DATA
router.post('/create-product', upload.single('image'), function(req, res){

  product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: `/uploads/${req.file.filename}`,
  });

 product.save((err) => {
      res.redirect('/all-products');
  });
});


module.exports = router;

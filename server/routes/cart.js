const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');
const User   = require('../models/User');
const Cart = require('../models/Cart');

// VIEW ALL PRODUCTS IN CART
router.get('/' , (req, res, next) => {
  Cart.find()
  .then(results =>res.status(200).json(results))
  .reject (err => console.log(err));
});

//ADD PRODUCT
router.post('/', function(req, res){
  product = new Product({
    title: req.body.title,
    price: req.body.price,
  });

 product.save()
  .then(result => {
    console.log("created!!")
    res.status(200).json(result)
  }).catch(err => console.log(err))
});

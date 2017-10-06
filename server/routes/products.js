const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');
const multer  = require('multer');
const upload  = multer({ dest: './public/uploads/' });
const User   = require('../models/User');

router.get('/all-products' , (req, res, next) => {
  Product.find()
  .then(results =>res.status(200).json(results))
  .reject (err => console.log(err));
});

router.post('/create-product', function(req, res){

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
// GET PRODUCT DATA
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then (product => {
     res.status(200).json(product)
   })
   .reject(err =>console.log(err))
});


// VIEW ALL PRODUCTS




//CREATE PRODUCT IN DATA



module.exports = router;

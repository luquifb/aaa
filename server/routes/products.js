const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');
const User   = require('../models/User');
const upload = require('../config/multer');
const path = require('path');

// VIEW ALL PRODUCTS
router.get('/all-products' , (req, res, next) => {
  Product.find()
  .then(results =>res.status(200).json(results))
  .reject (err => console.log(err));
});

//CREATE PRODUCT
router.post('/create-product', upload.single('file'), function(req, res){
  product = new Product({
    title: req.body.title,
    price: req.body.price,
    artist: req.body.artist,
    description: req.body.description,
    category: req.body.category,
    image: `/uploads/${req.file.filename}`
  });

 product.save()
  .then(result => {
    console.log("product created!!")
    res.status(200).json(result)
  }).catch(err => console.log(err))
});

// GET PRODUCT
router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then (product => {
     res.status(200).json(product)
   })
   .reject(err =>console.log(err))
});

// EDIT PRODUCT
router.put('/edit/:id', (req, res) => {
  const {
    title,
    price,
    artist,
    description,
    category
  } = req.body;
  const updates = {
    title,
    price,
    artist,
    description,
    category
  };

  Product.findByIdAndUpdate(req.params.id, updates, {
      new: true
    })
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

// DELETE PRODUCT
router.delete('/delete/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});


module.exports = router;

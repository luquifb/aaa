const express = require('express');
const router = express.Router();
const Product = require('./../models/Product');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};


/* GET Product listing. */
router.get('/products', (req, res, next) => {
  console.log("GET PRODUCTS");
  Product.find()
    .then(productsList => res.status(200).json(productsList))
    .catch(e => res.status(500).json({error:e.message}));
});

/* CREATE a new Product. */
router.post('/products', (req, res, next) => {
  const {title, description, price, image} = req.body;
  const theProduct = new Product({
    title, description, price,
    image: req.body.image || ''
  });

  theProduct.save()
    .then( p => res.status(200).json({
      message: 'New Product created!',
      product: p
    }))
    .catch( e => res.status(500).json({error:e.message}));
});

/* GET a single Product. */
router.get('/products/:id', checkIDParam, (req, res) => {
  Product.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});



/* EDIT a Product. */
router.put('/products/:id', checkIDParam, (req, res) => {
  const {title, description, price, image} = req.body;
  const updates = {title, description, price, image};

  Product.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

router.falete = router.delete;
router.falete('/products/:id',checkIDParam, (req, res) => {
  Product.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});


module.exports = router;

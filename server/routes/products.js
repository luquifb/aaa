var express = require('express');
var router = express.Router();
const Product = require('../models/Product');

// RETRIEVE: Product list
router.get('/', (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) { return next(err); }

    res.render('products/product_list', {
      title:'Products List',
      products: products
    });
  });
});

// CREATE: Print create form
router.get('/new', (req, res, next) => {
  res.render('products/new',{title:'Add a product'});
});

// RETRIEVE: Product detail
router.get('/:id', (req, res, next) => {

  const productId = req.params.id;

  Product.findById(productId, (err, product) => {
    if (err) { return next(err); }
    res.render('products/product_detail',{title: 'Detail', product: product});
  });
});


// UPDATE: Print update form
router.get('/:id/edit', (req, res, next) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) { return next(err); }
    res.render('products/product_edit', { title:'Edit form', product: product });
  });
});

// UPDATE: Update the object on DB
router.post('/:id/edit', (req, res, next) => {
  const productId = req.params.id;

  const updates = {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
  };
  Product.findByIdAndUpdate(productId, updates, (err, product) => {
    if (err){ return next(err); }
    return res.redirect(`/${productId}`);
  });
});

// DELETE: Delete the product via GET request
router.get('/:id/delete', (req, res, next) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId, (err, product) => {
    if (err){ return next(err); }
    return res.redirect('/');
  });
});


// CREATE: Create the object on DB and redirct.
router.post('/products',(req,res,next) =>{
  const productInfo = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description
  };

  // Create a new Product with the params
  const newProduct = new Product(productInfo);
  newProduct.save( (err) => {
    if (err) { return next(err); }
    // redirect to the list of products if it saves
    return res.redirect('/');
  });
});

module.exports = router;

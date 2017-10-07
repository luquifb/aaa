const express = require('express');
const router  = express.Router();
const Review = require('../models/Review');
const Product   = require('../models/Product');


// SUBMIT COMMENT
router.post('/:id/product-reviews', (req, res) => {
  Product.findById(req.params.id)
  .then (product => {
    newReview = new Review({
      writersName: req.params.name,
      description: req.body.description,
      productId: product._id
    });

    newReview.save().then( ok => {
      res.redirect(`/products/${req.params.id}`);
    });
  });
});

module.exports = router;

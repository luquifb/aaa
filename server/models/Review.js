const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userName: String,
  review: String,
  productId: String
});

reviewSchema.set('timestamps', true);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

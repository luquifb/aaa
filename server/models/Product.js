const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  productId: String,
  description: String,
  artist: String,
  price: Number,
  category: String,
  image: String,
  userId: String,
  ownerId: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

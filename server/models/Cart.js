const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cartSchema = new Schema({
  title: String,
  productId: String,
  userId: String,
  ownerId: String,
  price: Number,
  image: String,
  date: String,
  quantity: Number,
  completed: Boolean,
  removed: Boolean
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Cart = mongoose.model('Cart', productSchema);
module.exports = Cart;

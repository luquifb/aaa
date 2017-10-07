const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cartSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: Number
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;

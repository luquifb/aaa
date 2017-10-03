const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: String,
  productId: String,
	sellerId: String,
	date: String,
	amount: Number,
	city: String,
	country: String,
	phone: String,
	email: String
});

orderSchema.set('timestamps', true);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

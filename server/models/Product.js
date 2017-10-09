const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  productId: String,
  description: String,
  artist: String,
  price: Number,
  category: String,
  image: {
    type: String,
    default: 'http://images.mentalfloss.com/sites/default/files/tumblr_mn6cyzot1n1r6g8i2o2_1280_0.jpg?resize=1100x740'
    },
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

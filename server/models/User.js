const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  cart: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: Number
  }],
  pic_path: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHMZ61_YBq_vUIGkG7MHRA9cSztvgRAMIdGu-i9b0RFb4zLDa_g'
  },
  pic_name: {
    type:String,
    default:'avatar.png'
  },
  role: {
    type: String,
    enum : ['Buyer', 'Seller'],
    default : 'Buyer'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

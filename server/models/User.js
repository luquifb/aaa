const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  pic_path: {
    type: String,
    default: ''
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

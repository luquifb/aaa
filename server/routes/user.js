const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcrypt');
const bcryptSalt = 10;

// ADD PRODUCT TO CART
router.put('/:id', (req, res, next) => {
  const product = req.productId;

  User.findById(req.params.id, (err, user) => {
    if (err){ console.log(err); }
    user.cart.push(product);
    User.Save( user => res.status(200).json(user))
  });
});
// // GET USER PROFILE
// router.get('/profile/:id', (req, res, next) => {
//     res.render('user/profile', {
//       errorMessage: 'Error in editing'
//   });
// });
//
//
// // SEE EDIT MY PROFILE
// router.get('/edit-profile/:id', (req, res, next) => {
//   console.log("entro en back")
//   User.findById(req.params.id , (err, user) => {
//     if (err) { return next(err); }
//     res.render('user/edit-profile', { user: user });
//   });
// });
//
//
// // SUBMIT MY PROFILE UPDATES
// router.post('/edit-profile/:id', upload.single('photo'), (req, res, next) => {
//   const update = {
//     name : req.body.name,
//     email  : req.body.email,
//     username : req.body.username,
//     pic_path: `/uploads/${req.file.filename}`,
//     pic_name: req.file.originalname
//   };
//
//   User.findByIdAndUpdate(req.params.id , update, (err, user) => {
//     if (err){ console.log(err); }
//     console.log("Necesito ver USER", user);
//     console.log("Necesito ver UPDATE", update);
//     return res.render('user/profile', {currentUserInfo : update});
//   });
// });
//
//
// // DELETE USER
// router.get('/delete/:id', (req, res, next) => {
//   User.findByIdAndRemove(req.params.id)
//     .then( result =>  res.redirect('/'))
//     .reject( err => console.log(err));
// });

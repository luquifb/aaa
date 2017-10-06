const mongoose = require('mongoose');
const Product = require('../models/Product');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});

const products = [
  {
    title: 'Art 1',
    price: 29.99,
    image: 'https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjD5cet7tvWAhVCa1AKHcrvC68QjRwIBw&url=https%3A%2F%2Fwww.google.com%2Fculturalinstitute%2Fbeta%2Fcategory%2Fart-movement&psig=AOvVaw2LY5ozGuDGwzkpLXS6B1Bo&ust=1507374659263696',
    description: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
  },
  {
    title: 'Obra de arte',
    price: 249.99,
    image: 'https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjD5cet7tvWAhVCa1AKHcrvC68QjRwIBw&url=https%3A%2F%2Fwww.google.com%2Fculturalinstitute%2Fbeta%2Fcategory%2Fart-movement&psig=AOvVaw2LY5ozGuDGwzkpLXS6B1Bo&ust=1507374659263696',
    description: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
  },
  {
    title: 'artistic',
    price: 54.99,
    image: 'https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjD5cet7tvWAhVCa1AKHcrvC68QjRwIBw&url=https%3A%2F%2Fwww.google.com%2Fculturalinstitute%2Fbeta%2Fcategory%2Fart-movement&psig=AOvVaw2LY5ozGuDGwzkpLXS6B1Bo&ust=1507374659263696',
    description: 'You never have to leave your computer! All you can eat nutrition!',
  }
];

Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.title));
  mongoose.connection.close();
});

const mongoose = require('mongoose');
const Product = require('../models/Product');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});

const products = [
  {
    title: 'Les femmes dAlger',
    price: 299.99,
    artist: 'Pablo Picasso',
    category: 'Art',
    image: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FrOrFSqqbcE34sk0yZRTf6A%252FPICASSO%2BFEMMES%2BD%2527ALGER%2B%25C2%25A9%2B2015%2BEstate%2Bof%2BPablo%2BPicasso%2B%2BArtists%2BRights%2BSociety%2B%2528ARS%2529%252C%2BNew%2BYork.JPG&width=1100&quality=95',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Mariposas',
    price: 250.00,
    artist: 'Gaby Herbstein',
    category: 'Photography',
    image: 'http://gabyherbstein.com/grafica/prehome_02.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Abstrack',
    price: 54.99,
    artist: 'Unknown',
    category: 'Modern Art',
    image: 'https://az616578.vo.msecnd.net/files/2017/03/05/636242731472300906-828169648_MODERN%20ARRRTT.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Metamorphosis',
    price: 3000.00,
    artist: 'Salvador Dali',
    category: 'Art',
    image: 'https://learnodo-newtonic.com/wp-content/uploads/2017/02/Metamorphosis-of-Narcissus-1937-Salvador-Dali.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'The Photo Cociety',
    price: 200.00,
    artist: 'Steve McCurry',
    category: 'Photography',
    image: 'http://4fs63j47srdk3eoohz18a6ij182.wpengine.netdna-cdn.com/wp-content/uploads/INDIA-10841-900x600.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Tarsila do Amaral',
    price: 50000,
    artist: 'Unknown',
    category: 'Modern Art',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBAz-WkBs-b-XWsHmKUyaEp5P4JwRRej3TnRv73qUBXae5y895w',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
];

Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.title));
  mongoose.connection.close();
});

const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});

const products = [
  {
    title: 'Les femmes dAlger',
    price: 29999,
    artist: 'Pablo Picasso',
    category: 'Art',
    image: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FrOrFSqqbcE34sk0yZRTf6A%252FPICASSO%2BFEMMES%2BD%2527ALGER%2B%25C2%25A9%2B2015%2BEstate%2Bof%2BPablo%2BPicasso%2B%2BArtists%2BRights%2BSociety%2B%2528ARS%2529%252C%2BNew%2BYork.JPG&width=1100&quality=95',
    description: 'Les Femmes dAlger is a series of 15 paintings and numerous drawings by the Spanish cubist artist Pablo Picasso. The series, created in 1954-1955, was inspired by Eugène Delacroixs 1834 painting The Women of Algiers in their Apartment.',
  },
  {
    title: 'Mariposas',
    price: 1500,
    artist: 'Gaby Herbstein',
    category: 'Photography',
    image: 'http://gabyherbstein.com/grafica/prehome_02.jpg',
    description: 'Gaby Herbstein is a visual artist and Argentine photographer. Her work has been published in magazines, books, blogs and exhibitions across Latin America, the US, Russia, China and Japan.',
  },
  {
    title: 'Abstrack',
    price: 500,
    artist: 'Paolo',
    category: 'Painting',
    image: 'https://az616578.vo.msecnd.net/files/2017/03/05/636242731472300906-828169648_MODERN%20ARRRTT.png',
    description: 'Abstract art uses a visual language of shape, form, color and line to create a composition which may exist with a degree of independence from visual references in the world.',
  },
  {
    title: 'Metamorphosis',
    price: 3000,
    artist: 'Salvador Dali',
    category: 'Art',
    image: 'https://learnodo-newtonic.com/wp-content/uploads/2017/02/Metamorphosis-of-Narcissus-1937-Salvador-Dali.jpg',
    description: 'Metamorphosis of Narcissus is an oil-on-canvas painting by the Spanish surrealist Salvador Dalí. This painting is from Dalís Paranoiac-critical period. According to Greek mythology, Narcissus fell in love with his own reflection in a pool.',
  },
  {
    title: 'The Photo Society',
    price: 200,
    artist: 'Steve McCurry',
    category: 'Photography',
    image: 'http://4fs63j47srdk3eoohz18a6ij182.wpengine.netdna-cdn.com/wp-content/uploads/INDIA-10841-900x600.jpg',
    description: 'Steve McCurry has been a one of the most iconic voices in contemporary photography for more than 30 years, with scores of magazine and book covers, over a dozen books, and countless exhibitions around the world to his name.',
  },
  {
    title: 'Tarsila do Amaral',
    price: 50000,
    artist: 'Kamy',
    category: 'Painting',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBAz-WkBs-b-XWsHmKUyaEp5P4JwRRej3TnRv73qUBXae5y895w',
    description: 'Made by Hand with nature dyeing and each piece is unique. Produced only three different sizes: small, medium and large.',
  },
  {
    title: 'Legends 2017',
    price: 350,
    artist: 'Luis Gispert',
    category: 'Photography',
    image: 'https://d32dm0rphc51dk.cloudfront.net/hDuC46lPDGCNdW5UkaQjMg/large.jpg',
    description: 'Luis Gispert creates elaborately staged photographs of ordinary scenes juxtaposed with seemingly unrelated objects, individuals, and settings that suffuse the images with a sense of bizarre ambiguity.',
  },
  {
    title: 'Makasini Contemporary',
    price: 2000,
    artist: 'Viljame Heinonen',
    category: 'Painting',
    image: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=370&height=270&quality=95&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F78gBlGaJfEwMFAzpn8Pj4Q%2Flarge.jpg',
    description: 'This work is a watercolor and gouache on paper. Viljame is Finnish painter, based in Tampere, Finland.',
  },
  {
    title: 'Surreal Pencil Drawings of Lips',
    price: 340,
    artist: 'Christo',
    category: 'Work on paper',
    image: 'http://www.thisiscolossal.com/wp-content/uploads/2014/11/lips-01.jpg',
    description: 'Switzerland-based illustrator and artist Christo Dagorov created this unusual series of pencil drawings that transform the texture of lips into trees, the aerial layout of a city, and even other human forms.',
  },
  {
    title: 'Drunks, Prophets and Pieces of Shit ',
    price: 4100,
    artist: 'Russell Nachman',
    category: 'Work on paper',
    image: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=350&height=269&quality=95&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FOGKfugWc9S2mypt36cJKCQ%2Flarge.jpg',
    description: 'Watercolor, acrylic & gold leaf on paper. Russell Nachman (American, 1966) use of allegory serves his critical, and sometimes harsh, look at his roots as well as our culture at large.',
  },
];

const users = [
  {
    username: 'BadDog',
    password: '123',
    name: 'Andrei',
    email: 'bad@dog.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniUClXQCGlcgo9sy75mEOA889B3UnFsRX0XBoq8VK_mSjX2bYnw',
    role: 'Buyer',
  },
  {
    username: 'Frida',
    password: '123',
    name: 'Frida Kahlo',
    email: 'frida@kahlo.com',
    image: 'https://s5.eestatic.com/2017/07/06/cultura/Cultura_229239353_38694510_854x640.jpg',
    role: 'Seller',
  },
  {
    username: 'Luqui',
    password: '123',
    name: 'Lucas Fernandez B.',
    email: 'luqui@fernandezb.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjJmoUewlqAyau7rv0Qr6e7gQEpy4llbeMIN8sofVK5BwLhGdUQ',
    role: 'Buyer',
  },
  {
    username: 'Manuel',
    password: '123',
    name: 'Manuel, el TA',
    email: 'manu@ta.com',
    image: 'https://st2.depositphotos.com/8001674/12248/v/950/depositphotos_122484890-stock-illustration-bearded-man-watercolor-texture.jpg',
    role: 'Buyer',
  }
];


Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.title));
  mongoose.connection.close();
});

User.create(users, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(u => console.log(u.name));
  mongoose.connection.close();
});

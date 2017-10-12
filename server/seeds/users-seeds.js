const mongoose = require('mongoose');
const User = require('../models/User');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});

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

  User.create(users, (err, docs) => {
    if (err) {
      throw err;
    }
    docs.forEach(u => console.log(u.name));
    mongoose.connection.close();
  });
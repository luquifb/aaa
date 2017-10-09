const path = require('path');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
const dbURL = process.env.MONGODB_URL || 'mongodb://localhost/aaart';

mongoose.connect(dbURL)
  .then(() => debug(`connected to database ${dbURL}`))
  .catch(e => {
    debug(`ERROR CONNECTING TO DB ${dbURL}`);
    throw e;
  });

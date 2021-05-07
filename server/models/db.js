require('dotenv').config();
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true
};

mongoose.connect(process.env.DATABASE, options,
  () => console.log(`Connected to mongoDB ${process.env.DB_NAME}.`)
);
mongoose.set('useFindAndModify', false);

module.exports = mongoose;
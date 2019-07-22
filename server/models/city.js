const mongoose = require('./db');

const weatherSchema = new mongoose.Schema({
  day: {
    type: Date,
    required: true
  },
  temp: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});

const infoSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
    default: null
  },
  weather: {
    type: [weatherSchema],
    required: true,
    default: []
  }
});

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city_id: {
    type: String,
    required: true
  },
  info: {
    type: infoSchema,
    default: null
  }
});

exports.City = mongoose.model('City', citySchema);
exports.Weather = mongoose.model('Weather', weatherSchema);
exports.Info = mongoose.model('comment', infoSchema);

const {City, Weather, Info} = require('../models/city');

// get all cities stored in DB
exports.getAll = async (ctx) => {
  const cities = await City.find();
  if (cities) {
    ctx.body = cities;
    ctx.status = 200;
  } else {
    ctx.status = 404;
  }
};

// get one city from DB
exports.getOne = async (ctx) => {

};

// save weather info in DB
exports.save = async (ctx) => {

};
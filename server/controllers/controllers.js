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
  const { id } = ctx.params;
  const city = await City.findOne({_id: id});
  if (city) {
    ctx.body = city;
    ctx.status = 200;
  } else {
    ctx.status = 404;
  }
};

// save weather info in DB
exports.save = async (ctx) => {
  const { id } = ctx.params;
  const { forecast } = ctx.request.body;
  const infos = parseWeather(forecast);

  const updated = await City.findOneAndUpdate(
    {_id: id},
    {$set: {info: infos}},
    {new: true}
    );
  if (updated) {
    ctx.body = updated;
    ctx.status = 200;
  } else {
    ctx.status = 404;
  }
};
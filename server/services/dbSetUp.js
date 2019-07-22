const {City, Weather, Info} = require('../models/city');
const mongoose = require('../models/db');

const cities = [
{
  name: 'barcelona',
  country: 'ES',
  city_id: 3128760
},
{
  name: 'madrid',
  country: 'ES',
  city_id: 3117735
},
{
  name: 'rome',
  country: 'IT',
  city_id: 6539761
},
{
  name: 'paris',
  country: 'FR',
  city_id: 2988507
},
{
  name: 'london',
  country: 'GB',
  city_id: 2643743
}
];

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const setUp = async () => {
  await asyncForEach(cities, async (city) => {
    const res = await City.findOne({
      city_id: city.id
    });
    if(!res) {
      const newCity = new City({
        name: city.name,
        country: city.country,
        city_id: city.city_id
      });
      await newCity.save();
    }
  });
  console.log('Done');
  process.exit(0);
};

setUp();
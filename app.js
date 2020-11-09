const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const placeName = process.argv[2];
if(!placeName) {
  console.log('Please provide a location.');
  return;
}

geocode(placeName, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }

  const { lat, lng, location } = data;
  forecast(lat, lng, (error, data) => {
    if(error) {
      console.error('Error:', error);
    } else {
      console.log(`${location}:`, data);
    }
  });
});

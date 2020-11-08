const request = require('postman-request');
const { WEATHERSTACK_API_KEY } = require('./env.json');
const BASE_URL = 'http://api.weatherstack.com';

// console.log('Starting');

// setTimeout(() => {
//   console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//   console.log('0 second timer');
// }, 0);

// console.log('Stopping');

const weatherUrl = `${BASE_URL}/current?access_key=${WEATHERSTACK_API_KEY}&query=Boulder`;
request(
  {
    url: weatherUrl,
    json: true,
  },
  (_err, _resp, body) => {
    const currentData = body.current;
    console.log('current weather:', currentData);
  }
);

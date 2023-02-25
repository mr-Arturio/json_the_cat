const request = require('request');

const arg = process.argv.slice(2);
//console.log(process.argv);
//console.log(arg[0]);
const breed = arg[0];

const URL = ` https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  if (error) {
    //if an error occurs, we output an error message with the error details using console.error()
    console.error('Error occurred:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breed}' not found.`);
    } else {
      console.log(data[0].description); //data[0] returns the first (and only) object in the array
      //without [0], we trying to access the description property of the array itself, which does not exist and would result in an error.
    }
  }
});
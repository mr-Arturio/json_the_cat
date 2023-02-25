const request = require('request');

const arg = process.argv.slice(2); //retrieves command-line arguments passed to the program, excluding the first two arguments
//console.log(process.argv); // test
//console.log(arg[0]); // test
const breed = arg[0]; //the first command-line argument passed to the program (cat breed in our case)

const URL = ` https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => { //request() method takes two parameters: the URL to request, and a callback function (error, response, and body.) to execute when the response is received.
  if (error) {
    //if an error occurs, we output an error message with the error details using console.error()
    console.error('Error occurred:', error);
  } else {
    const data = JSON.parse(body); // string to an object
    if (data.length === 0) {
      console.log(`Breed '${breed}' not found.`);
    } else {
      console.log(data[0].description); //data[0] returns the first (and only) object in the array
      //without [0], we trying to access the description property of the array itself, which does not exist and would result in an error.
    }
  }
});
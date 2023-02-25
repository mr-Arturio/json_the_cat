const request = require('request');

// const arg = process.argv.slice(2); //retrieves command-line arguments passed to the program, excluding the first two arguments
// //console.log(process.argv); // test
// //console.log(arg[0]); // test
// const breed = arg[0]; //the first command-line argument passed to the program (cat breed in our case)

const fetchBreedDescription = function (breedName, callback) {

  const URL = ` https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => { //request() method takes two parameters: the URL to request, and a callback function (error, response, and body.) to execute when the response is received.
    if (error) {
      //if an error occurs, we output an error message with the error details using console.error()
      callback(error, null);
    } else {
      const data = JSON.parse(body); // string to an object
      if (data.length === 0) {
        callback(`Breed '${breedName}' not found.`, null);
      } else {
        callback(null, data[0].description); //data[0] returns the first (and only) object in the array
        //without [0], we trying to access the description property of the array itself, which does not exist and would result in an error.
      }
    }
  });
};


module.exports = { fetchBreedDescription };
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`);
  request(url, (error, response, body) => {
 
    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else if (breed === undefined)  {
      callback(`Information on breed name: ${breedName}, can not be found. Please try again`, null);
    } else if (error) {
      callback(`ERROR: Failure to retrieve details: ${error}`, null);
    }
  });
};
module.exports = { fetchBreedDescription };

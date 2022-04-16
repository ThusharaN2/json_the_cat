const request = require('request');
const catBreed = process.argv[2];


let url = (`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`);
request(url, (error, response, body) => {


  if (error) {
    console.log(`ERROR: Failure to retrieve details: ${error}`);
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const breed = data[0];
  if (breed === undefined) {
    console.log(`Information on breed name: ${catBreed}, can not be found. Please try again`);
  }
  if (breed) {
    console.log(breed.description);
  }
});
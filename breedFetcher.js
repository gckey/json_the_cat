const request = require("request");
// API request
const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  const urlSearch = url + breedName;
  
  request(urlSearch, (error, response, body) => {
    if (error) {
      callback('Error: request failed', null);
    }
    if (response.statusCode !== 200) {
      callback(`Error ${response.statusCode}: apologies, the page you requested was not found`, null);
      return;
    }
    const data = JSON.parse(body); // convert string to object
    /*check if the data array is empty(breed was not found) */
    if (data.length < 1) {
      callback("Error: Breed not found", null);
      return;
    }
    // If breed exists, log its description from the 1st obj in the data array
    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };
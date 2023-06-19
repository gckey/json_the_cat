const request = require("request");

const inputBreed =  process.argv[2];
const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${inputBreed}`;


// API request
request(apiURL, (error, response, body) => {
  //Handle the response and error
  if (error) {
    console.error('Request failed:', error);
    return;
  }
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response received

  const data = JSON.parse(body); // convert string to object
  /* check if the data array is empty(breed was not found) */
  if (data.length === 0) {
    console.log("Breed not found.");
  } else {
    // If breed exists, log its description from the 1st obj in the data array
    console.log(data[0].description);
  }
});
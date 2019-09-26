const input = process.argv.slice(2)
const request = require('request')
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + input
request(url, (error, res, body) => {
  const data = JSON.parse(body);
  const breedDescription = data[0]
  if (error) {
    throw error
  } else if (breedDescription == null) {
    console.log('error')
  } else {
    console.log(breedDescription.description);
   }
});
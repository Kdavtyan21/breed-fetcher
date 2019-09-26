const input = process.argv.slice(2)
const request = require('request')
const url = 'https://api.thecatapi.com/v1/images/search?breed_id=char'
request(url, (error, res, body) => {
  if (error) {
    console.log('error here')
  } else {
  console.log(typeof body)
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  }
})
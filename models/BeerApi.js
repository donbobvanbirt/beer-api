const axios = require('axios')
require('dotenv').load();

exports.getRand = (cb) => {
  console.log('in BeerApi.getRand');
  // axios.get(`http://api.brewerydb.com/v2/search?q=miller&type=brewery&key=${process.env.API_KEY}`)
  axios.get(`http://api.brewerydb.com/v2/beer/random?key=${process.env.API_KEY}`)
  // axios.get(`http://brewerydb.com/`)
  .then(res => {
    let { data } = res;
    console.log('data in BeerApi:', data);
    cb(null, data)
  })
  .catch((error) => cb(error))
}

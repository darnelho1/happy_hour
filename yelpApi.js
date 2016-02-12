// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'happy hour', location: 'Pioneer Square', limit:10 })
.then(function (data) {

  data.businesses.forEach(function(x){
    console.log(x);
  });
  // data.businesses.forEach(function(x){
  //   (x.location.neighborhoods===''+neighborhood+'')?console.log(x):console.log('not it');
  // })
  // console.log(data.businesses);
})
.catch(function (err) {
  console.error(err);
});

// See http://www.yelp.com/developers/documentation/v2/business
// yelp.business('yelp-san-francisco')
//   .then(console.log)
//   .catch(console.error);

// yelp.phoneSearch({ phone: '+15555555555' })
//   .then(console.log)
//   .catch(console.error);

// A callback based API is also available:
// yelp.business('yelp-san-francisco', function(err, data) {
//   if (err) return console.log(error);
//   console.log(data);
// });


yelp.search();

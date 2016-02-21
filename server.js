var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var config = require ('./scripts/config');
// var models = require ('./scripts/models');
var querystring = require('querystring');
var PORT = 3000;
var Yelp= require('yelp');
// var DB = config.DB;
var searchResults;

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.sendFile('index.html',{root:__dirname + '/'});
});

app.get("/search/:usersearch", function(req, res){
  var usersearch = req.params.usersearch;
  console.log(usersearch);
});

app.post('/search',function(req,res){
  console.log(req.body.searchCrit);
  userSearchReq = req.body.searchCrit;
  console.log(userSearchReq);
  var searchString = querystring.stringify({term:userSearchReq.terms, nBHood:userSearchReq.reqNeighborhood, ll:userSearchReq.currectLoc});
  console.log('the string:');
  console.log(searchString);
  if(userSearchReq.reqNeighborhood===""){
    yelp.search({term:'happy hour '+ userSearchReq.terms,ll:userSearchReq.currectLoc,limit:20}).then(function(data){
      // console.log(data.businesses);
      searchResults = { yelp :data.businesses, url: searchString};
      res.send(searchResults);
    }).catch(function(error){
      res.send(error);
      console.log(error);
    });
  }

  else{
  yelp.search({term:'happy hour '+ userSearchReq.terms,location:userSearchReq.reqNeighborhood,cll:userSearchReq.currectLoc,limit:20}).then(function(data){
    // console.log(data.businesses);
    searchResults = { yelp :data.businesses, url: searchString};
    res.send(searchResults);
  }).catch(function(error){
    res.send(error);
    console.log(error);
  });
  }
});

app.post('/resultsMore',function(req,res){
  // console.log(req.body.searchCrit);
  userSearchReq = req.body.searchCrit;
  console.log(userSearchReq);
  if(userSearchReq.reqNeighborhood===""){
    yelp.search({term:'happy hour '+ userSearchReq.terms,ll:userSearchReq.currectLoc,limit:20}).then(function(data){
      console.log(data.businesses);
      searchResults=data.businesses;
      res.send(searchResults);
    }).catch(function(error){
      res.send(error);
      console.log(error);
    });
  }
  else{
  yelp.search({term:'happy hour '+ userSearchReq.terms,location:userSearchReq.reqNeighborhood,cll:userSearchReq.currectLoc,limit:20}).then(function(data){
    console.log(data.businesses);
    searchResults=data.businesses;
    res.send(searchResults);
  }).catch(function(error){
    res.send(error);
    console.log(error);
  });
  }
});



app.listen(PORT,function(){
  console.log('server started');
});

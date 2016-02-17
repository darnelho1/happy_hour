var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var config = require ('./scripts/config');
// var models = require ('./scripts/models');
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

app.post('/search',function(req,res){
  console.log(req.body.searchCrit);
  userSearchReq= req.body.searchCrit;
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

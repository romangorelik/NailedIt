var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://roman:roman1@ds157956.mlab.com:57956/user-count', function(err){
  if(err) console.log(err);
  console.log("connection successful");
});

module.exports = db;

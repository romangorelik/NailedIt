let mongoose = require('mongoose');
let db = require('./index.js');

let userSchema = mongoose.Schema({
  basic: {type: Number, default: 0},
  premium: {type: Number, default: 0},
  vip: {type: Number, default: 0}
})

let Users = mongoose.model('Users', userSchema)

module.exports = {'Users': Users}
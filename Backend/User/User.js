var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var UserSchema = new mongoose.Schema({
  id: String,
  name:String,
  age:Number,
  password:String,
});
UserSchema.plugin(random);
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User')
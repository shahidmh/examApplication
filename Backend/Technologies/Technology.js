var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var TechnologySchema = new mongoose.Schema({
  name: String,
  description:String
});
TechnologySchema.plugin(random);
mongoose.model('Technology', TechnologySchema);
module.exports = mongoose.model('Technology')
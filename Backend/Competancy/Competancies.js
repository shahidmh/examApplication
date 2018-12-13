var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var CompetanciesSchema = new mongoose.Schema({
  level: String,
  description:String
});
CompetanciesSchema.plugin(random);
mongoose.model('Competancies', CompetanciesSchema);
module.exports = mongoose.model('Competancies')
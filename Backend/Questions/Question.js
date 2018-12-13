var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var QuestionSchema = new mongoose.Schema({
  competancy: String,
  technology: String,
  yearOfExp: String,
  question: String,
  options: [],

});
QuestionSchema.plugin(random);
mongoose.model('Question', QuestionSchema);
module.exports = mongoose.model('Question')
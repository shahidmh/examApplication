// server.js
var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  // console.log('The value of PORT is:', process.env.PORT);
  console.log('Express server listening on port ' + port);
 
});

// var http = require('http');
// var server = http.createServer(app);
// server.listen(port, function () {
//   app.setHost(undefined); // change five
  
// });
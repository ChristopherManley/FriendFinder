
var path = require('path');
// Runs App 
module.exports = function(app) {

  app.get('/survey', function(req,res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

};
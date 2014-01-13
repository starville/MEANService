/* jshint node: true, laxcomma: true */

var path = require('path')
  , util = require('util')
  , express = require('express')
  , app = express()
  , framework = require('express-play')({ app: app });

app.configure(function () {
  app.use(express.static(path.join(__dirname, '/dist')));
});

app.get('/', function (req, res) {
  res.render('index.html');
});

framework.play(3000, function () {
  util.log('Listening on ' + 3000);
});

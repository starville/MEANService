/* jshint node: true, laxcomma: true */

var config = require('./config')
  , util = require('util')
  , express = require('express')
  , app = express()
  , framework = require('express-play')({ app: app });

app.configure(function () {
  app.use(express.static(config.static));
});

app.get('/', function (req, res) {
  res.render('index.html');
});

framework.play(config.port, function () {
  util.log('Listening on ' + config.port);
});

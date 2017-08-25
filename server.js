var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var fs = require('fs');
var app = express();
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//routes
app.use('/fonts',express.static(__dirname + '/build_webpack/fonts'));
app.use('/static/js',express.static(__dirname + '/build_webpack/static/js'));
app.use('/static/css',express.static(__dirname + '/build_webpack/static/css'));
app.use('/static/media',express.static(__dirname + '/build_webpack/static/media'));
app.use(favicon(__dirname + '/build_webpack/favicon.ico'));

app.post('/contact', function (req, res) {
  var auth = {
    auth: {
      api_key: '',
      domain: ''
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: req.body.email,
    to: 'marco@hackerfirm.com',
    subject: 'Request of information for JSON Capital',
    text: req.body.email
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });
});

app.use('/*', function(req, res) {
    fs.readFile(__dirname + '/build_webpack/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

var http = require('http').Server(app);

http.listen((process.env.PORT || 3000), function () {
    console.log('-> listening on port : ' + (process.env.PORT || 3000));
});

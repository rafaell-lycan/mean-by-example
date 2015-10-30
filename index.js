'use strict';

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let passport = require('passport');
let session = require('express-session');

let app = express();

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret: 'secret123'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.render('index');
});

//API Routes
app.use('/api', require('./routes/routes'));

//Catch 404 routes
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);
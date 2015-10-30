'use strict';

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');

let routes = require('./routes/routes');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('<h1>Will Render our APP</h1>');
});

//API Routes
app.use('/api', routes);

//Catch 404 routes
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);
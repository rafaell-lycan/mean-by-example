'use strict';

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let passport = require('passport');
let session = require('express-session');

let app = express();

app.use(session({secret: 'secret123'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

//API Routes
app.use('/api', require('./routes/api'));

app.get('/*', function (req, res) {
  res.sendfile(path.join(__dirname, 'views/index.html'));
});

app.use(function(err, req, res, next){
    res.send(err.status, {error_code: err.status, message: err.message || 'Something went wrong :-('});
});

app.listen(3000);
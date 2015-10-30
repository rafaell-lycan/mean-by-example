'use strict';

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist')

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log("database is open");
});

module.exports = db;
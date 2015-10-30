'use strict';

let express = require('express');
let router = express.Router();
let TodoController = require('../controllers/TodoController');

router.all('/', (req, res) =>  res.json({'message' : 'Mean API'}) );

router.route('/todos')
      // Returns all TODOs
      .get(TodoController.index)
      // Create a new TODO
      .post(TodoController.create);

router.route('/todos/:id')
      // Returns a particular TODO
      .get(TodoController.show)
      // Update existing TODO
      .put(TodoController.update)
      // Delete existing TODO
      .delete(TodoController.destroy);

//Catch 404 routes
router.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
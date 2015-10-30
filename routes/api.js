'use strict';

let express = require('express');
let router = express.Router();

router.all('/', (req, res) =>  res.json({'message' : 'Mean API'}) );

router.route('/todos')
      // Returns all TODOs
      .get( (req, res) => res.json({message: 'All todos'}))
      // Create a new TODO
      .post( (req, res) => res.json({message: 'New Todo Created'}));

router.route('/todos/:id')
      // Returns a particular TODO
      .get( (req, res) => res.json({message: 'Get TODO id: ' + req.params.id }))
      // Update existing TODO
      .put( (req, res) => res.json({message: 'Update TODO id: ' + req.params.id}))
      // Delete existing TODO
      .delete( (req, res) => res.json({message: 'Delete TODO id: ' + req.params.id}));

module.exports = router;
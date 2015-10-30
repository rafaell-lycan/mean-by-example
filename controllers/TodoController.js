'use strict';

function index (req, res, next) {
  res.json({message: 'All todos'});
}

function create (req, res, next) {
  res.json({message: 'New Todo Created'});
}

function show (req, res, next) {
  res.json({message: 'Get TODO id: ' + req.params.id });
}

function update (req, res, next) {
  res.json({message: 'Update TODO id: ' + req.params.id});
}

function destroy (req, res, next) {
  res.json({message: 'Delete TODO id: ' + req.params.id});
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
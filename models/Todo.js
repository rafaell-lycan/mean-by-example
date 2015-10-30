let mongoose = require('mongoose');
let TodoSchema = new mongoose.Schema({
  description: String,
  category: String,
  dueDate: Date,
  done: Boolean,
  createAt: {
    type: Date,
    default: Date.now
  }
});

let TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pdfPath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Assignment', assignmentSchema);

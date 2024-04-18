const mongoose = require('mongoose');

const rollListSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  pdfPath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('RollList', rollListSchema);

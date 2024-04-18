const mongoose = require('mongoose');

const questionbankSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Questionbank', questionbankSchema);

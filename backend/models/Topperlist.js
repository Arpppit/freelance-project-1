const mongoose = require('mongoose');

const topperlistSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  pdfPath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Topperlist', topperlistSchema);

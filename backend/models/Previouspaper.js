const mongoose = require('mongoose');

const previouspaperSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Previouspaper', previouspaperSchema);

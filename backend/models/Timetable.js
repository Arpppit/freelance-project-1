const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pdfPath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Timetable', timetableSchema);

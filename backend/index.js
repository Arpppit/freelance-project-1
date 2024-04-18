const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const timetableRoutes = require('./routes/TimetableRoutes');
const rollListRoutes = require('./routes/RollListRoutes');
const assignmentRoutes = require('./routes/AssignmentRoutes');
const questionbankRoutes = require('./routes/QuestionbankRoutes');
const previouspaperRoutes = require('./routes/PreviouspaperRoutes');
const syllabusRoutes = require('./routes/SyllabusRoutes');
const topperlistRoutes = require('./routes/TopperlistRoutes');
const activityRoutes = require('./routes/ActivityRoutes');
const adminRoutes = require('./routes/AdminRouter');

// Initialize the Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabase', { 
  // useNewUrlParser: true, 
  // useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Middlewares
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies
app.use('/uploads', express.static('uploads')); // Serve static files from uploads directory

// Routes
app.use('/api/timetables', timetableRoutes);
app.use('/api/rollLists', rollListRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/questionbanks', questionbankRoutes);
app.use('/api/previouspapers', previouspaperRoutes);
app.use('/api/syllabuses', syllabusRoutes);
app.use('/api/topperlists', topperlistRoutes);
app.use('/api/activitys', activityRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use('/uploads', express.static('uploads'));


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;

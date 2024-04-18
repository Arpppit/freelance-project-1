const Timetable = require('../models/Timetable');

exports.createTimetable = async (req, res) => {
  try {
    const { name } = req.body;
    const pdfPath = req.file.path;
    const timetable = new Timetable({ name, pdfPath });
    await timetable.save();
    res.status(201).json(timetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find();
    const modifiedTimetables = timetables.map(timetable => {
      return {
        ...timetable.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${timetable.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedTimetables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTimetableById = async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    if (!timetable) return res.status(404).send('Timetable not found');
    res.status(200).json(timetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTimetable = async (req, res) => {
  try {
    const { name } = req.body;
    let updateData = { name };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const timetable = await Timetable.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!timetable) return res.status(404).send('Timetable not found');
    res.status(200).json(timetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findByIdAndDelete(req.params.id);
    if (!timetable) return res.status(404).send('Timetable not found');
    res.status(200).send('Timetable deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

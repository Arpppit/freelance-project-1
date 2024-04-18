const Syllabus = require('../models/Syllabus');

exports.createSyllabus = async (req, res) => {
  try {
    const { year, name } = req.body;
    const pdfPath = req.file.path;
    const syllabus = new Syllabus({ year, name, pdfPath });
    await syllabus.save();
    res.status(201).json(syllabus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSyllabuses = async (req, res) => {
  try {
    const syllabuses = await Syllabus.find();
    const modifiedSyllabuses = syllabuses.map(syllabus => {
      return {
        ...syllabus.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${syllabus.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedSyllabuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSyllabusById = async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) return res.status(404).send('Syllabus not found');
    res.status(200).json(syllabus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSyllabus = async (req, res) => {
  try {
    const { year, name } = req.body;
    let updateData = { year, name };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const syllabus = await Syllabus.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!syllabus) return res.status(404).send('Syllabus not found');
    res.status(200).json(syllabus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.findByIdAndDelete(req.params.id);
    if (!syllabus) return res.status(404).send('Syllabus not found');
    res.status(200).send('Syllabus deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

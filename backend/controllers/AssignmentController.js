const Assignment = require('../models/Assignment');

exports.createAssignment = async (req, res) => {
  try {
    const { year, name } = req.body;
    const pdfPath = req.file.path;
    const assignment = new Assignment({ year, name, pdfPath });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    const modifiedAssignments = assignments.map(assignment => {
      return {
        ...assignment.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${assignment.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedAssignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).send('Assignment not found');
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const { year, name } = req.body;
    let updateData = { year, name };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!assignment) return res.status(404).send('Assignment not found');
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) return res.status(404).send('Assignment not found');
    res.status(200).send('Assignment deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Activity = require('../models/Activity');

exports.createActivity = async (req, res) => {
  try {
    const { name, description } = req.body;
    const pdfPath = req.file.path;
    const activity = new Activity({ name,description, pdfPath });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getActivitys = async (req, res) => {
  try {
    const activitys = await Activity.find();
    const modifiedActivitys = activitys.map(activity => {
      return {
        ...activity.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${activity.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedActivitys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) return res.status(404).send('Activity not found');
    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateActivity = async (req, res) => {
  try {
    const { name, description } = req.body;
    let updateData = { name, description };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const activity = await Activity.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!activity) return res.status(404).send('Activity not found');
    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) return res.status(404).send('Activity not found');
    res.status(200).send('Activity deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

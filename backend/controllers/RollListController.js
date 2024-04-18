const RollList = require('../models/RollList');


exports.createRollList = async (req, res) => {
  try {
    const { year } = req.body;
    const pdfPath = req.file.path;

    // Delete existing roll list for the same year
    await RollList.findOneAndDelete({ year });

    const rollList = new RollList({ year, pdfPath });
    await rollList.save();
    res.status(201).json(rollList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getRollLists = async (req, res) => {
  try {
    const rollLists = await RollList.find();
    const modifiedRollLists = rollLists.map(rollList => {
      return {
        ...rollList.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${rollList.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedRollLists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRollListById = async (req, res) => {
  try {
    const rollList = await RollList.findById(req.params.id);
    if (!rollList) return res.status(404).send('Roll list not found');
    res.status(200).json(rollList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRollList = async (req, res) => {
  try {
    const { year } = req.body;
    let updateData = { year };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }

    // Delete existing roll list for the same year
    await RollList.findOneAndDelete({ year });

    const rollList = new RollList(updateData);
    await rollList.save();
    res.status(200).json(rollList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRollList = async (req, res) => {
  try {
    const rollList = await RollList.findByIdAndDelete(req.params.id);
    if (!rollList) return res.status(404).send('Roll list not found');
    res.status(200).send('Roll list deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

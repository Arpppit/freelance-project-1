const Previouspaper = require('../models/Previouspaper');

exports.createPreviouspaper = async (req, res) => {
  try {
    const { year, name } = req.body;
    const pdfPath = req.file.path;
    const previouspaper = new Previouspaper({ year, name, pdfPath });
    await previouspaper.save();
    res.status(201).json(previouspaper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPreviouspapers = async (req, res) => {
  try {
    const previouspapers = await Previouspaper.find();
    const modifiedPreviouspapers = previouspapers.map(previouspaper => {
      return {
        ...previouspaper.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${previouspaper.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedPreviouspapers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPreviouspaperById = async (req, res) => {
  try {
    const previouspaper = await Previouspaper.findById(req.params.id);
    if (!previouspaper) return res.status(404).send('Previouspaper not found');
    res.status(200).json(previouspaper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePreviouspaper = async (req, res) => {
  try {
    const { year, name } = req.body;
    let updateData = { year, name };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const previouspaper = await Previouspaper.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!previouspaper) return res.status(404).send('Previouspaper not found');
    res.status(200).json(previouspaper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePreviouspaper = async (req, res) => {
  try {
    const previouspaper = await Previouspaper.findByIdAndDelete(req.params.id);
    if (!previouspaper) return res.status(404).send('Previouspaper not found');
    res.status(200).send('Previouspaper deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

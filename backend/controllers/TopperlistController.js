const Topperlist = require('../models/Topperlist');

exports.createTopperlist = async (req, res) => {
  try {
    const { year } = req.body;
    const pdfPath = req.file.path;
    const topperlist = new Topperlist({ year, pdfPath });
    await topperlist.save();
    res.status(201).json(topperlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTopperlists = async (req, res) => {
  try {
    const topperlists = await Topperlist.find();
    const modifiedTopperlists = topperlists.map(topperlist => {
      return {
        ...topperlist.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${topperlist.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedTopperlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTopperlistById = async (req, res) => {
  try {
    const topperlist = await Topperlist.findById(req.params.id);
    if (!topperlist) return res.status(404).send('Topperlist not found');
    res.status(200).json(topperlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTopperlist = async (req, res) => {
  try {
    const { year, name } = req.body;
    let updateData = { year };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const topperlist = await Topperlist.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!topperlist) return res.status(404).send('Topperlist not found');
    res.status(200).json(topperlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTopperlist = async (req, res) => {
  try {
    const topperlist = await Topperlist.findByIdAndDelete(req.params.id);
    if (!topperlist) return res.status(404).send('Topperlist not found');
    res.status(200).send('Topperlist deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

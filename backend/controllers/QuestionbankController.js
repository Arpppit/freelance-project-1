const Questionbank = require('../models/Questionbank');

exports.createQuestionbank = async (req, res) => {
  try {
    const { year, name } = req.body;
    const pdfPath = req.file.path;
    const questionbank = new Questionbank({ year, name, pdfPath });
    await questionbank.save();
    res.status(201).json(questionbank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuestionbanks = async (req, res) => {
  try {
    const questionbanks = await Questionbank.find();
    const modifiedQuestionbanks = questionbanks.map(questionbank => {
      return {
        ...questionbank.toObject(),
        pdfUrl: `${req.protocol}://${req.get('host')}/uploads/${questionbank.pdfPath.split('\\').pop()}` // Create a URL
      };
    });
    res.status(200).json(modifiedQuestionbanks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuestionbankById = async (req, res) => {
  try {
    const questionbank = await Questionbank.findById(req.params.id);
    if (!questionbank) return res.status(404).send('Questionbank not found');
    res.status(200).json(questionbank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateQuestionbank = async (req, res) => {
  try {
    const { year, name } = req.body;
    let updateData = { year, name };
    if (req.file) {
      updateData.pdfPath = req.file.path;
    }
    const questionbank = await Questionbank.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!questionbank) return res.status(404).send('Questionbank not found');
    res.status(200).json(questionbank);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteQuestionbank = async (req, res) => {
  try {
    const questionbank = await Questionbank.findByIdAndDelete(req.params.id);
    if (!questionbank) return res.status(404).send('Questionbank not found');
    res.status(200).send('Questionbank deleted');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

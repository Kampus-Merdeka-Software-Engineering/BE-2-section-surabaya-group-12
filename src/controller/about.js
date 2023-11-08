const AboutModel = require('../models/about');

const getAllAbout = async (req, res) => {
  try {
    const [data] = await AboutModel.getAllAbout();

    res.json({
      message: 'Get All About Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewAbout = async (req, res) => {
  const { body } = req;

  if (!body.about_name || !body.about_position) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
    });
  }
  try {
    await AboutModel.createNewAbout(body);
    res.status(201).json({
      message: 'Create New About Successfully',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateAbout = async (req, res) => {
  const { idAbout } = req.params;
  const { body } = req;

  try {
    await AboutModel.updateAbout(body, idAbout);
    res.json({
      message: 'Update About Successfully',
      data: {
        id: idAbout,
        ...body,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const deleteAbout = async (req, res) => {
  const { idAbout } = req.params;
  try {
    await AboutModel.deleteAbout(idAbout);
    res.json({
      message: 'Delete About Successfully',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllAbout,
  createNewAbout,
  updateAbout,
  deleteAbout,
};

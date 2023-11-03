const aboutModel = require('');

const getAllAbout = async (req, res) => {
  try {
    const [data] = await AboutModel.getAllAbout();

    res.json({
      message: 'Get All About Succes',
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

  if (!body)
    try {
      await AboutModel.createNewAbout(body);
      res.status(201).json({
        message: 'Create New About successfully',
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
      message: 'Update About Successfuly',
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

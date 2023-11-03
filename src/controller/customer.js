const CustumerModel = require('');

const getAllCustomer = async (req, res) => {
  try {
    const [data] = await CustomerModel.getAllCustomer();

    res.json({
      message: 'Get All Customer Succesfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewCustomer = async (req, res) => {
  const { body } = req;

  if (!body)
    try {
      await CustomerModel.createNewCustomer(body);
      res.status(201).json({
        message: 'Create New Customer successfully',
        data: body,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: err,
      });
    }
};

const updateCustomer = async (req, res) => {
  const { idAbout } = req.params;
  const { body } = req;

  try {
    await CustomerModel.updateCustomer(body, idAbout);
    res.json({
      message: 'Update Customer Successfuly',
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

const deleteCustomer = async (req, res) => {
  const { idCustomer } = req.params;
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
  getAllCustomer,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};

const RoomModel = require('../models/room');

const getAllRoom = async (req, res) => {
  try {
    const [data] = await RoomModel.getAllRoom();

    res.json({
      message: 'Get All Room Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewRoom = async (req, res) => {
  const { body } = req;

  if (!body.room_type || !body.room_price) {
    res.status(400).json({
      message: 'You Submitted Incorrect Data!',
      data: null,
    });
  }
  try {
    await RoomModel.createNewRoom(body);
    res.status(201).json({
      message: 'Create New Room Successfully',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateRoom = async (req, res) => {
  const { idRoom } = req.params;
  const { body } = req;

  try {
    await RoomModel.updateRoom(body, idRoom);
    res.json({
      message: 'Update Room Successfully',
      data: {
        id: idRoom,
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

const deleteRoom = async (req, res) => {
  const { idRoom } = req.params;
  try {
    await RoomModel.deleteRoom(idRoom);
    res.json({
      message: 'Delete Room Successfully',
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
  getAllRoom,
  createNewRoom,
  updateRoom,
  deleteRoom,
};

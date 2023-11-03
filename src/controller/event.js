const eventModel = require('');

const getAllEvent = async (req, res) => {
  try {
    const [data] = await EventModel.getAllEvent();

    res.json({
      message: 'Get All Event Succes',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewEvent = async (req, res) => {
  const { body } = req;

  if (!body)
    try {
      await EventModel.createNewEvent(body);
      res.status(201).json({
        message: 'Create New Event successfully',
        data: body,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: err,
      });
    }
};

const updateEvent = async (req, res) => {
  const { idEvent } = req.params;
  const { body } = req;

  try {
    await EventModel.updateAbout(body, idAbout);
    res.json({
      message: 'Update Event Successfuly',
      data: {
        id: idEvent,
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

const deleteEvent = async (req, res) => {
  const { idEvent } = req.params;
  try {
    await EventModel.deleteEvent(idEvent);
    res.json({
      message: 'Delete Event Successfully',
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
  getAllEvent,
  createNewEvent,
  updateEvent,
  deleteEvent,
};

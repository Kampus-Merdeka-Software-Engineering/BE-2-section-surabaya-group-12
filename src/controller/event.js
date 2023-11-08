const EventModel = require('../models/event');

const getAllEvent = async (req, res) => {
  try {
    const [data] = await EventModel.getAllEvent();

    res.json({
      message: 'Get All Event Successfully',
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

  if (!body.event_name || !body.event_detail || !body.event_description) {
    res.status(400).json({
      message: 'You Submitted Incorrect Data!',
      data: null,
    });
  }
  try {
    await EventModel.createNewEvent(body);
    res.status(201).json({
      message: 'Create New Event Successfully',
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
    await EventModel.updateEvent(body, idEvent);
    res.json({
      message: 'Update Event Successfully',
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

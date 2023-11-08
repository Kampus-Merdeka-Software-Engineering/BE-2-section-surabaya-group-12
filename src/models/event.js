const dbPool = require('../config/database');

const getAllEvent = () => {
  const SQLQuery = 'SELECT * FROM event';

  return dbPool.execute(SQLQuery);
};

const createNewEvent = (body) => {
  const SQLQuery = `INSERT INTO event (event_name, event_detail, event_description) VALUES ('${body.event_name}', '${body.event_detail}', '${body.event_description}')`;

  return dbPool.execute(SQLQuery);
};

const updateEvent = (body, idEvent) => {
  const SQLQuery = `UPDATE event SET event_name = '${body.event_name}', event_detail = '${body.event_detail}', event_description = '${body.event_description}' WHERE id = '${idEvent}'`;

  return dbPool.execute(SQLQuery);
};

const deleteEvent = (idEvent) => {
  const SQLQuery = `DELETE FROM event WHERE id=${idEvent}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllEvent,
  createNewEvent,
  updateEvent,
  deleteEvent,
};

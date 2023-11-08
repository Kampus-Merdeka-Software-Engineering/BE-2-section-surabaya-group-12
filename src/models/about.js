const dbPool = require('../config/database');

const getAllAbout = () => {
  const SQLQuery = 'SELECT * FROM about';

  return dbPool.execute(SQLQuery);
};

const createNewAbout = (body) => {
  const SQLQuery = `INSERT INTO about (about_name, about_position) VALUES ('${body.about_name}', '${body.about_position}')`;

  return dbPool.execute(SQLQuery);
};

const updateAbout = (body, idAbout) => {
  const SQLQuery = `UPDATE about 
  SET about_name='${body.about_name}', about_position='${body.about_position}' WHERE id=${idAbout}`;

  return dbPool.execute(SQLQuery);
};

const deleteAbout = (idAbout) => {
  const SQLQuery = `DELETE FROM about WHERE id=${idAbout}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllAbout,
  createNewAbout,
  updateAbout,
  deleteAbout,
};

const dbPool = require('../config/database');

const getAllCustomer = () => {
  const SQLQuery = 'SELECT * FROM customer';

  return dbPool.execute(SQLQuery);
};

const createNewCustomer = (body) => {
  const SQLQuery = `INSERT INTO event (customer_name, customer_description) VALUES ('${body.customer_name}', '${body.customer_description}')`;

  return dbPool.execute(SQLQuery);
};

const updateCustomer = (body, idCustomer) => {
  const SQLQuery = `UPDATE customer SET customer_name = '${body.customer_name}`,
    customer_description = `${body.customer_description}`;

  return dbPool.execute(SQLQuery);
};

const deleteCustomer = (idCustomer) => {
  const SQLQuery = `DELETE FROM customer WHERE id=${idCustomer}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllCustomer,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};

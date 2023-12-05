const prisma = require('../config/prisma');

const getAllCustomer = async () => {
  const findManyCustomer = await prisma.customer.findMany();
  return findManyCustomer;
};

const getOneCustomer = async (idCustomer) => {
  const findOneCustomer = await prisma.customer.findUnique({
    where: {
      id: parseInt(idCustomer),
    },
  });
  return findOneCustomer;
};

const createNewCustomer = async (body) => {
  const createOneCustomer = await prisma.customer.create({
    data: body,
  });
  return createOneCustomer;
};

const updateCustomer = async (body, idCustomer) => {
  const updateCustomerData = {
    /* data destructuring body
    customer_name: body.customer_name,
    customer_description: body.customer_description,
    */
    ...body,
  };
  const updateOneCustomer = await prisma.customer.update({
    where: {
      id: parseInt(idCustomer),
    },
    data: updateCustomerData,
  });
  return updateOneCustomer;
};

const deleteCustomer = async (idCustomer) => {
  const deleteOneCustomer = await prisma.customer.delete({
    where: {
      id: parseInt(idCustomer),
    },
  });
  return deleteOneCustomer;
};

module.exports = {
  getAllCustomer,
  getOneCustomer,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};

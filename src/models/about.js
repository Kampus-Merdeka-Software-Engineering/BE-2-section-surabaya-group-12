const prisma = require('../config/prisma');

const getAllAbout = async () => {
  const findManyAbout = await prisma.about.findMany();
  return findManyAbout;
};

const getOneAbout = async (idAbout) => {
  const findOneAbout = await prisma.about.findUnique({
    where: {
      id: parseInt(idAbout),
    },
  });
  return findOneAbout;
};

const createNewAbout = async (body) => {
  const createOneAbout = await prisma.about.create({
    data: body,
  });
  return createOneAbout;
};

const updateAbout = async (body, idAbout) => {
  const updateAboutData = {
    /* data destructuring body
    id: idAbout,
    created_at: created_at,
    about_fullname: body.about_fullname,
    about_position: body.about_position, 
    */
    ...body,
  };
  const updateOneAbout = await prisma.about.update({
    where: {
      id: parseInt(idAbout),
    },
    data: updateAboutData,
  });
  return updateOneAbout;
};

const deleteAbout = async (idAbout) => {
  const deleteOneAbout = await prisma.about.delete({
    where: {
      id: parseInt(idAbout),
    },
  });
  return deleteOneAbout;
};

module.exports = {
  getAllAbout,
  getOneAbout,
  createNewAbout,
  updateAbout,
  deleteAbout,
};

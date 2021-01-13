const faker = require('faker');
const prisma = require('../src/prismaClient');

const seedDatas = async () => {
  await prisma.user.create({
    data: {
      firstName: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });
};

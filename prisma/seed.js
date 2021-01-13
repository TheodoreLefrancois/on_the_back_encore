const faker = require('faker');
const prisma = require('../src/prismaClient');

const seedDatas = async () => {
  await prisma.user.create({
    data: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });

  await prisma.roadTrip.create({
    data: {
      label: faker.lorem.words(3),
      description: faker.lorem.words(20),
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.roadTrip.create({
    data: {
      label: faker.lorem.words(3),
      description: faker.lorem.words(20),
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.pin.create({
    data: {
      long: 45.2,
      lat: -0.25,
      title: faker.lorem.words(3),
      description: faker.lorem.words(20),
      roadTrip: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.pin.create({
    data: {
      long: 49.6534,
      lat: 3.0488,
      title: faker.lorem.words(3),
      description: faker.lorem.words(20),
      roadTrip: {
        connect: {
          id: 1,
        },
      },
    },
  });

  await prisma.pin.create({
    data: {
      long: 40.4167754,
      lat: -3.3037902,
      title: faker.lorem.words(3),
      description: faker.lorem.words(20),
      roadTrip: {
        connect: {
          id: 2,
        },
      },
    },
  });

  await prisma.pin.create({
    data: {
      long: 51.509093,
      lat: -0.094151,
      title: faker.lorem.words(3),
      description: faker.lorem.words(20),
      roadTrip: {
        connect: {
          id: 2,
        },
      },
    },
  });
};

seedDatas();

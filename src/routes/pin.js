const express = require('express');
const { valPin } = require('../joiSchema');
const { joiValidation } = require('../middlewares');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.pin.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await prisma.pin.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.send(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', joiValidation(valPin), async (req, res, next) => {
  try {
    const results = await prisma.pin.create({
      data: {
        long: req.body.long,
        lat: req.body.lat,
        title: req.body.title,
        description: req.body.description,
        roadTripId: req.body.roadTripId,
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', joiValidation(valPin), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { long, lat, title, description, roadTripId } = req.body;
    const results = await prisma.pin.update({
      where: {
        id: parseInt(id, 10),
      },
      data: { long, lat, title, description, roadTripId },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.pin.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

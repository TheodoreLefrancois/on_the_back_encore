const express = require('express');
const { valRoadTrip } = require('../joiSchema');
const { joiValidation } = require('../middlewares');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/roadTrip', async (req, res, next) => {
  try {
    const results = await prisma.roadTrip.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/roadTrip', joiValidation(valRoadTrip), async (req, res, next) => {
  try {
    const results = await prisma.roadTrip.create({
      data: {
        label: req.body.label,
        description: req.body.description,
        creationDate: req.body.creationDate,
        userId: req.body.userId,
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

router.put(
  '/roadTrip/:id',
  joiValidation(valRoadTrip),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { label, description, creationDate, userId } = req.body;
      const results = await prisma.roadTrip.update({
        where: {
          id: parseInt(id, 10),
        },
        data: { label, description, creationDate, userId },
      });
      res.status(200).json(results);
    } catch (err) {
      next(err);
    }
  }
);
router.delete('/roadTrip/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.roadTrip.delete({
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

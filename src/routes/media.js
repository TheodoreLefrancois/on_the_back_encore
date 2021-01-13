const express = require('express');
const { valMedia } = require('../joiSchema');
const { joiValidation } = require('../middlewares');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await prisma.media.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.send(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/', joiValidation(valMedia), async (req, res, next) => {
  try {
    const results = await prisma.media.create({
      data: {
        url: req.body.url,
        isPicture: req.body.isPicture,
        pinId: req.body.pinId,
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', joiValidation(valMedia), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { url, isPicture, pinId } = req.body;
    const results = await prisma.user.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        url,
        isPicture,
        pinId,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
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

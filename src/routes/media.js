const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

router.get('/media', async (req, res, next) => {
  try {
    const results = await prisma.media.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

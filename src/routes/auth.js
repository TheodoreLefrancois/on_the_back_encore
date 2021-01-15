const jwt = require('jsonwebtoken');
const express = require('express');
const prisma = require('../prismaClient');

const { decodePassword } = require('../util');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // check if this admin exists in database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // if not, throw a 401
    if (!user) {
      res.status(401);
      throw new Error('User does not exists');
    }

    // if yes, continue by comparing both password
    const isValid = decodePassword(password, user.password);

    // if the password is not valid, throw a 401
    if (!isValid) {
      res.status(401);
      throw new Error('Invalid password');
    }
    // if it is valid, then continue by signing a new token
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.SECRET,
      {
        expiresIn: '9h',
      }
    );

    // and then respond with the jwt in json
    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

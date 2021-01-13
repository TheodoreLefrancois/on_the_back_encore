const express = require('express');
const user = require('./user');
// const status = require('./status');

const router = express.Router();

// router.use('/status', status);
router.use('/user', user);

module.exports = router;

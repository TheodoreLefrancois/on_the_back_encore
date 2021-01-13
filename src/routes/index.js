const express = require('express');
// const status = require('./status');

const router = express.Router();
const auth = require('./auth');
const media = require('./media');
const pin = require('./pin');
const roadTrip = require('./roadTrip');
const user = require('./user');

// router.use('/status', status);
router.use('/auth', auth);
router.use('/media', media);
router.use('/pin', pin);
router.use('/roadTrip', roadTrip);
router.use('/user', user);

module.exports = router;

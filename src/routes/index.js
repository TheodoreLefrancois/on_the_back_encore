const express = require('express');
const { authentication } = require('../middlewares');
// const status = require('./status');

const router = express.Router();
const auth = require('./auth');
const media = require('./media');
const pin = require('./pin');
const roadTrip = require('./roadTrip');
const user = require('./user');

// router.use('/status', status);
router.use('/auth', auth);
router.use('/media', authentication, media);
router.use('/pin', authentication, pin);
router.use('/roadTrip', authentication, roadTrip);
router.use('/user', user);

module.exports = router;

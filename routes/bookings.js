const express = require('express');
const { booktrip, bookings, myBookings } = require('../controllers/bookingsControllers');
const { auth, authAdmin } = require('../helpers/validation');

const router = express.Router();


router.post('/', auth, booktrip);

module.exports = router;

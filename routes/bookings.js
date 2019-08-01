const express = require('express');
const { booktrip, bookings, myBookings } = require('../controllers/bookingsControllers');
const { auth, authAdmin } = require('../helpers/validation');

const router = express.Router();


router.post('/', auth, booktrip);
router.post('/allbookings', authAdmin, bookings);
router.post('/mybookings', auth, myBookings);

module.exports = router;

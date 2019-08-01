const express = require('express');
const { booktrip, bookings, myBookings } = require('../controllers/bookingsControllers');
const { auth, authAdmin } = require('../helpers/validation');

const router = express.Router();


router.post('/', auth, booktrip);
router.get('/allbookings', authAdmin, bookings);
router.get('/mybookings', auth, myBookings);

module.exports = router;

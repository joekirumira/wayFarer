const express = require('express');
const { getSpecificTrip, getAllTrips, cancelSpecificTrip } = require('../controllers/tripsControllers');
const { auth, authAdmin } = require('../helpers/validation');

const router = express.Router();

router.get('/:tripId', auth, getSpecificTrip);

router.get('/', auth, getAllTrips);

router.put('/:tripId/cancel', authAdmin, cancelSpecificTrip);

module.exports = router;

const express = require('express');
const path = require('path');
const usersRoute = require('./users');
const adminRoute = require('./admins');
const tripsRoute = require('./trips');
const bookingsRoute = require('./bookings');

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './UI/index.html'));
});

router.use('/users/', usersRoute);
router.use('/admin/', adminRoute);
router.use('/trips/', tripsRoute);
router.use('/bookings/', bookingsRoute);

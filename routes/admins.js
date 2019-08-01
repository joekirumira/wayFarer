const express = require('express');
const { createTrip } = require('../controllers/tripsControllers');
const { authAdmin } = require('../helpers/validation');

const router = express.Router();

/* router.get('/admin', (req, res) => {
	res.sendFile(path.join(__dirname, './UI/admin.html'));
}); */

router.post('/createtrip', authAdmin, createTrip);

module.exports = router;

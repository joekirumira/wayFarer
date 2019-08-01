const bodyParser = require('body-parser');

const Trips = [{
	tripOrigin: "Kigali",
	tripDestination: "Nairobi",
	tripDate: "10/10/2019",
	tripFare: 250.8,
	tripCapacity: 20,
	tripBusNumber: "KBC 112",
	tripOnStatus: true
},
];

const addId = (arr) => {
	return arr.map((obj, index) => {
		return Object.assign({}, obj, { tripId: index });
	}
};

const allTrips = addId(Trips);

exports.createTrip = (error, req, res) => {
	if (error) {
		res.status(400).JSON("There was an error creating the trip!");
	} else {
		const {
			tripOrigin, tripDestination, tripDate, tripFare, tripCapacity, tripBusNumber
		} = req.body;
		allTrips.push(req.body);
		res.status(201).JSON(`Trip created with tripDestination: ${tripDestination}`);
		res.send(" Trip Successfully created!!!");
	}
};

exports.cancelSpecificTrip = (req, res, error) => {
	if (error) {
		res.status(400).JSON("There was an error cancelling the trip");
	} else {
		const tripId = req.params;
		const result = allTrips.filter((trip) => {
			if (trip.tripId === tripId) {
				trip.tripOnStatus = false;
			}
		});
		res.status(205).JSON(result);
	}
};

console.log(allTrips);

module.exports = allTrips;

const userList = require('./usersController');
const allTrips = require('./tripsControllers');

const bookings = [];

const addId = (arr) => {
	return arr.map((obj, index) => {
		return Object.assign({}, obj, { bookingId: index });
	}
};

const allBookings = addId(bookings);

exports.booktrip = (req, res) => {
	let { TripId, userId } = req.body;
	const case1 = allTrips.filter(trip => trip.tripId === TripId);
	const case2 = userList.filter(user => user.userId === userId);
	const result = case1.slice(tripBusNumber, tripDate);
	const result2 = case2.slice(firstname, lastname, lastname, userId);

	const relation = (result, result2) => {		
	    const prop;
	    for ( prop in result2 ) {
	        if ( result2.hasOwnProperty(prop) && !result[prop] ) {
	            result[prop] = result2[prop];
	        }
	    }
	}
	
	bookings.push(result);
	res.status(201).JSON({
		message: "Trip has been booked",
		data: allBookings[allBookings.length-1]
	});
};

module.exports = allBookings;
const request = require('supertest');
const app = require('../index');

describe("book a seat", () => {
	it("user can book a seat on a trip", (done) => {
		request(app).put("/bookings/");
		.expect(201, done);		
	})
});

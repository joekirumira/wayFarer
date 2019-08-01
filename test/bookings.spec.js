const request = require('supertest');
const app = require('../index');

describe("book a seat", () => {
	it("user can book a seat on a trip", (done) => {
		request(app).put("/bookings/");
		.expect(201, done);		
	})
});

describe("admin sees all bookings", () => {
	it("admin can see all bookings made", (done) => {
		request(app).put("/bookings/allbookings");
		.expect(302, done);		
	})
});

describe("user sees his/her bookings", () => {
	it("user can see all his/her bookings", (done) => {
		request(app).put("/bookings/mybookings");
		.expect(302, done);		
	})
});

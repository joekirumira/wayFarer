const request = require('supertest');
const app = require('../index');

describe("admin can cancel trip", () => {
	it("admin should be able to cancle a trip", (done) => {
		request(app).put("/trips/:tripId/cancel");
		.expect(205, done);		
	})
});

describe("see all trips", () => {
	it("admin and user can see all trips", (done) => {
		request(app).get("/trips/");
		.expect(302, done);		
	})
});

describe("see specific trip", () => {
	it("admin and user can see a specific trip", (done) => {
		request(app).get("/trips/:tripId");
		.expect(302, done);		
	})
});

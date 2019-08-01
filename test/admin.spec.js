const request = require('supertest');
const app = require('../index');

describe("admin can create trip", () => {
	it("admin should be able to create trip", (done) => {
		request(app).post("/createtrip");
		.expect(201, done);		
	})
});

const request = require('supertest');
const app = require('../index');

describe("admin can cancel trip", () => {
	it("admin should be able to cancle a trip", (done) => {
		request(app).put("/:tripId/cancel");
		.expect(205, done);		
	})
});

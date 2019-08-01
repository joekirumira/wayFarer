const request = require('supertest');
const app = require('../index');

describe("user can signup", () => {
	it("user should be able to sign up", (done) => {
		request(app).post("/signup");
		.expect(201, done);		
	})
});


const request = require('supertest');
const app = require('../index');

describe("user can signup", () => {
	it("user should be able to sign up", (done) => {
		request(app).post("/signup");
		.expect(201, done);		
	})
});

describe("user can signin", () => {
	it("should return user details", (done) => {
		request(app).get('/signin');
		.expect(302 done);
	})
});

const { assert } = require('chai');

describe('password should match confirm password', () => {
	it('should validate that the two passwords given match', () => {
		const signUpPassword = document.querySelector('#signUpPassword');
		const confirmPassword = document.querySelector('#confirmPassword');
		assert.strictEqual(signUpPassword, confirmPassword);
	});
});

describe('name input should be a string', () => {
	it('first name and last name input should be a string', () => {
		const signUpName = document.querySelector('.sign-up-name');
		assert.typeOf(signUpName, 'string');
	});
});

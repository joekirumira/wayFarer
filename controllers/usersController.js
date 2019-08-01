const jwt = require('jsonwebtoken');
const path = require('path');

const users = [
	{
		firstname: "Hoze", lastname: "Kasule", email: "joenamz@gmail.com", password: "123456", is_admin: false
	},
];

const addId = arr => arr.map((obj, index) => Object.assign({}, obj, { userId: index }));

const userList = addId(users);

exports.createUser = (req, res, next) => {
	const {
		firstname, lastname, email, password
	} = req.body;	//	data = JSON.parse(req.body);
	userList.push(req.body);
	res.status(201).JSON(`User added with firstname: ${firstname}`);
};

exports.signinUser = (req, res, next) => {
	const signUpEmail = req.body.email;
	const signUpPassword = req.body.password;
	//	const data = JSON.parse(req.params);
	const result = userList.filter((user) => {
		if (user.password === req.body.password && user.email === req.body.email) {
			const token = jwt.sign(
				{
					email: user.email,
					firstname: user.firstname,
					lastname: user.lastname,
					admin: user.is_admin,
					userId: user.userId
				},
				process.env.JWT_KEY,
				{
					expiresIn: "1h"
				}
			);
			return res.status(302).JSON({
				message: "Authentication Success",
				token
			});
		}
		return res.status(500).JSON(" Signin Error");
	});

	res.status(302).JSON(result);
	// res.sendFile(path.join(__dirname, './UI/user.html'));
	next();
};


console.log(userList);

module.exports = userList;

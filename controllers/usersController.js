const jwt = require('jsonwebtoken');
const path = require('path');

const users = [
	{
		firstname: "Hoze", lastname: "Kasule", email: "joenamz@gmail.com", password: "123456", is_admin: false
	},
];

const addId = (arr) => {
	return arr.map((obj, index) => {
		return Object.assign({}, obj, { userId: index });
	}
};

const userList = addId(users);

exports.createUser = (req, res, next) => {
	const {
		firstname, lastname, email, password
	} = req.body;	//	data = JSON.parse(req.body);
	userList.push(req.body);
	res.status(201).JSON(`User added with firstname: ${firstname}`);
};

console.log(userList);

module.exports = userList;

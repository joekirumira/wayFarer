const path = require('path');
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
	try {
		const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
		req.userDetails = decoded;
		next();
	} catch (error) {
		return res.status(401).JSON({
			message: "Authentication failed"
		});
	}
};

exports.authAdmin = (req, res, next) => {
	try {
		const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
		const { admin } = decoded.admin;
		if (admin === true) {
			res.status(200).JSON("Authentication Successful");
		} else {
			res.status(401).JSON("Authentication Failed");
		}
		next();
	} catch (error) {
		return res.status(401).JSON({
			message: "Authentication failed"
		});
	}
};

exports.validateLogin = (req, res, next) => {
	try {
		const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
		req.userDetails = decoded;
		const { admin } = decoded.admin;
		if (admin === true) {
			res.sendFile(path.join(__dirname, './UI/admin.html'));
		} else {
			res.sendFile(path.join(__dirname, './UI/user.html'));
		}
		next();
	} catch (error) {
		return res.status(401).JSON({
			message: "Authentication failed"
		});
	}
};

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

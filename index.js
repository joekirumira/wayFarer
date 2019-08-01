const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');


app.use(express.static('UI'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

app.use((req, res, next) => {
	res.status(404).send('Resource not found');
});


app.use((err, req, res, next) => {
// console.error(err.stack)
	res.sendFile(path.join(__dirname, './UI/500.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server started on port ${PORT}`));

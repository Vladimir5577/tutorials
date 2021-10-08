const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const seederRoute = require('./routes/seederRoute');
const userRoute = require('./routes/userRoute');
const articleRoute = require('./routes/articleRoute');
const commentRoute = require('./routes/commentRoute');

const app = express();

app.use(express.json());

// router
app.use('/', seederRoute);
app.use('/user', userRoute);
app.use('/article', articleRoute);
app.use('/comment', commentRoute);

const start = async () => {
	try {
		await sequelize.authenticate();
		// refresh database
		// await sequelize.sync(
			// { force: true }
		// );
		app.listen(3000, () => {
			console.log('Server up and running on port 3000');
		});
	} catch (error) {
		console.log(error);
	}
};

start();
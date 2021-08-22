const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

const connectWithRetry = () => {
	mongoose
		.connect('mongodb://user:password@mongo:27017/?authSource=admin', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		.then(() => console.log('DB connect successfully'))
		.catch((e) => console.log(e));
};

connectWithRetry();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Hello from node js</h1>');
});

// localhost:3000/api/v1/post/
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server up and running on the port ${port}`);
});
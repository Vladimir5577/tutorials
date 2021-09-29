const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const app = express();
dotenv.config();


// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => {
	res.send('Hello Node js!');
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
 
mongoose.connect(
	process.env.MONGO_URL
	// , 
	// {
	// 	useNewUrlParser: true,
	// 	useFindAndModify: false,
	// 	useUnifiedTopology: true
	// }
	// ,
	// () => console.log('Connected to DB')
);


app.listen(8800, () => {
	console.log('Server up and running on port 8800');
});
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(
	process.env.DB_CONNECT, 
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	},
	() => console.log('Connected to DB')
);

// Middlevare
app.use(express.json());


// Route Middleware
app.use('/api/user', authRoute); //http://localhost:3000/api/user/register
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server running on the port 3000'));
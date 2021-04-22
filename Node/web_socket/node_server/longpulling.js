const express = require('express');
const cors = require('cors');
const events = require('events');

const PORT = 5000;

const emitter = new events.EventEmitter();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/get-messages', (req, res) => {
	console.log(req.body);
	emitter.once('newMessage', (message) => {
		res.json(message);
	});
});

app.post('/new-messages', (req, res) => {
	const message = req.body;
	emitter.emit('newMessage', message);
	res.status(200);
});

app.listen(PORT, () => console.log(`Server up and running on the port ${PORT}`));

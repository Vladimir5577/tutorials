const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

// Upload Endpoint
app.post('/upload', (req, res) => {
	console.log(req.files);
	if (req.files === null) {
		return res.status(400).json({ msg: 'No file uploaded' });
	}

	const file = req.files.file;
	file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}

		res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
	});
});

app.listen(5000, () => console.log('Server running on the port 5000'));
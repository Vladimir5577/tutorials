const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Thats great '));

app.listen(3000, () => {
	console.log('Server running on the port 3000');
});
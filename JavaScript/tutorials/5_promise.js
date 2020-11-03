console.log('Request data ...');

/*
// without promise
setTimeout(() => {
	console.log('Prepairing data');
	const backendData = {
		server: 'localhost',
		port: 8000,
		status: 'working'
	};

	setTimeout(() => {
		backendData.modified = true;
		console.log('Data received', backendData);
	}, 2000);
}, 2000);
*/

const p = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Prepairing data ....');
	
		const backendData = {
			server: 'localhost',
			port: 8000,
			status: 'working'
		};

		resolve(backendData);

	}, 3000);
});

p.then((data) => {
	const p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			resolve(data);
		}, 2000);
	});

	p2.then(clientData => {
		console.log('Data received', clientData);
	});
});

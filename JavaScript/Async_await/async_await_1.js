console.log('Start');

const getDataPromise = (num) => new Promise((resolve, reject) => {
	setTimeout(() => {
		typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
	}, 2000);
});

const processData = async () => {
	let data = await getDataPromise(4);
	// let data = await getDataPromise('abc'); // to get promise rejected (not a number)
	data = await getDataPromise(data);
	data = await getDataPromise(data);
	return data;
}

processData().then((data) => {
	console.log('Data', data);
}).catch((error) => {
	console.log('Error', error);
});


console.log('Finish');

console.log('start');

function delay (ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
			console.log('resolved');
		}, ms);
	});
}

const promise = delay(3000);

promise
	.then(() => console.log(1))
	.then(() => console.log(2))
	.then(() => console.log(3))
	.then(() => console.log(4));


console.log('finished');

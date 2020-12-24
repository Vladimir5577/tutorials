function getPromise () {
	return new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
}

function logA () {
	console.log('A');
}

function logB () {
	console.log('B');
}
function logCAndThrow () {
	console.log('C');

	throw new Error();
}
function catchError () {
	console.log('Error has occur!');
}

getPromise()
	.then(logA)
	.then(logB)
	.then(logCAndThrow)
	.catch(catchError);
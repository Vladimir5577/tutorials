function delay (ms) {
	return new Promise ((resolve) => {
		setTimeout(() => resolve(), ms) 
	});
}

async function fn () {
	console.log('before');
	await delay(1000);
	console.log(1);
	await delay(1000);
	console.log(2);
	await delay(1000);
	console.log(3);
	await delay(1000);
	console.log(4);
	console.log('after');
}

console.log('before function fn()');
fn();
console.log('after function fn()');

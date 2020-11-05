console.log('Start');

setTimeout(function () {
	console.log('Inside timeout function');
}, 3000);

function timeout2sec () {
	console.log('Another time out');
}

setTimeout(timeout2sec, 4000);

console.log('Finish');

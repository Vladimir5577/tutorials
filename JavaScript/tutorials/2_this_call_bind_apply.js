function hello () {
	console.log('Hello', this);
}

const person = {
	name: 'Bob',
	age: 25,
	sayHello: hello,
	logInfo: function (job, phone) {
		console.group(`${this.name} info:`);
		console.log(`Name is ${this.name}`);
		console.log(`Age is ${this.age}`);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);
		console.groupEnd();
	}
};

const mike = {
	name: 'Mike',
	age: 23
};

console.log('---- bind ------------------------------');

// bind - return a function then we can call it
const fnMikeInfo = person.logInfo.bind(mike);
console.log(fnMikeInfo('programmer', '123-1333'));

console.log('---- call ------------------------------');

// call - call it themself
console.log(person.logInfo.call(mike, 'Front-end', '234-234'));

console.log('---- apply -----------------------------');

console.log(person.logInfo.apply(mike, ['Back-end', '345-3535']));

console.log('-----------------------------------------');

const array = [1, 2, 3, 4, 5];

// usual approach
function multBy (arr, n) {
	return arr.map(function (i) {
		return i * n;
	});
}

console.log(multBy(array, 5));

console.log('------- prototype ------------------------------');


Array.prototype.multiplyBy = function (n) {
	return this.map(function (i) {
		return i * n;
	});
}

console.log(array.multiplyBy(2));

console.log('-----------------------------------------');

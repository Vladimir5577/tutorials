// Closure

console.log('--------------------------------------');

function createCalc (n) {
	return function () {
		console.log(1000 * n);
	}
}

const calc = createCalc(34);
calc();

console.log('--------------------------------------');

function createIncrementor (n) {
	return function (num) {
		return n + num;
	}
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));


console.log('--------------------------------------');

function urlGenerator (domain) {
	return function (url) {
		return `https://${url}.${domain}`;
	}
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));
console.log(ruUrl('vk'));

console.log('--------------------------------------');

function bind (context, fn) {
	return function (...arg) {
		fn.apply(context, );
	}
}

function logPerson () {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Bob', age: 24, job: 'programmer' };
const person2 = { name: 'Mike', age: 32, job: 'back-end' };

bind(person1, logPerson)();
bind(person2, logPerson)();

console.log('--------------------------------------');

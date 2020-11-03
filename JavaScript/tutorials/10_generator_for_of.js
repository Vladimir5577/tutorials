/*
function* strGenerator () {
	yield 'H'
	yield 'e'
	yield 'l'
	yield 'l'
	yield 'o'
}

const str = strGenerator();

console.log(str.next());
*/

/*
function* numberGen (n = 7) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

const num = numberGen(17);
console.log(num.next());
*/

const iterator = {
	gen(n = 10) {
		let i = 0;

		return {
			next () {
				if (i < n) {
					return { value: ++i, done: false };
				}

				return { value: undefined, done: true };
			}
		};
	}
};

console.log(iterator.gen().next());


for (let k of 'Hello') {
	console.log(k);
}

for (let k of [1, 2, 3, 4]) {
	console.log(k);
}

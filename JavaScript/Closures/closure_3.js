const createAdder = (a) => {
	return (b) => {
		return a + b;
	}
}

const add10 = createAdder(10);
console.log(-2);
console.log(20);
const add100 = createAdder(100);
console.log(add100(-35));

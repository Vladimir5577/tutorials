const createCounter = () => {
	let count = 0;

	return {
		increment () {
			count++
		},
		decrement () {
			count--
		},
		get () {
			return count
		}
	};
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// output -1

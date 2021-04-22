// Set Algoritms

function cartProduct (setA, setB) {
	const product = [];
	
	for (const setAEl of setA) {
		for (const setBEl of setB) {
			product.push([setAEl, setBEl]);
		}
	}

	return product;
}

const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l', 'x'];

console.log(cartProduct(colors, sizes)); // [['blue', 'm'], ...]

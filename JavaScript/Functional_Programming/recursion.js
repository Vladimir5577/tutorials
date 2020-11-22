console.log('-----------------------------------------------------------------');
console.log('----Loop Normar Function ----------------------------------------');

function countDown (n) {
	for (let i = n; i > 0; i--) {
		console.log(i);
	}

	console.log('Loop finised');
}

countDown(5);


console.log('-----------------------------------------------------------------');
console.log('----Loop Recursive Function -------------------------------------');


function countDownRecursive (n) {
	if (n <= 0) {
		return;
		console.log('Loop finished');
	}

	console.log(n);
	countDownRecursive(n - 1);
} 

countDownRecursive(5);

console.log('-----------------------------------------------------------------');
console.log('---- Sum number normal function ---------------------------------');

function sumRange (n) {
	let total = 0;
	for (let i = n; i > 0; i--) {
		total += i;
	}

	return total;
}

console.log(sumRange(5));


console.log('-----------------------------------------------------------------');
console.log('---- Sum Recursive Function -------------------------------------');

function sumRangeRecursive (n, total = 0) {
	if (n <= 0) {
		return total;
	}
	
	console.log('call');
	return sumRangeRecursive(n - 1, total + n);
}

console.log(sumRangeRecursive(5, 0));

console.log('-----------------------------------------------------------------');

const tree = {
	name: 'John',
	children: [
		{
			name: 'Jim',
			children: []
		},
		{
			name: 'Zoe',
			children: [
				{ name: 'Kyle', children: [] },
				{ name: 'Sophia', children: [] },
			]
		}
	]
}

function printChildrenRecursive (t) {
	if (t.children.length === 0) {
		return;
	}

	t.children.forEach(child => {
		console.log(child.name);
		printChildrenRecursive(child);
	});
};


console.log(printChildrenRecursive(tree));

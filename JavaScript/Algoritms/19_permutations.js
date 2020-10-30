// Permutation - each of several possible ways in which a set of numbers can be ordered or arranged

// Without Repetition
function getPermutations (options) {
	const permutations = [];
	
	if (options.length === 1) {
		return [options];
	}

	const partialPermutations = getPermutations(options.slice(1));

	const firstOption = options[0];

	for (let i = 0; i < partialPermutations.length; i++) {
		const partialPermutation = partialPermutations[i];

		for (let j = 0; j <= partialPermutation.length; j++) {
			const permutationInFront = partialPermutation.slice(0, j);
			const permutationAfter = partialPermutation.slice(j);
			permutations.push(permutationInFront.concat([firstOption], permutationAfter));
		}
	}

	return permutations;
}

const todoListItems = [
	'Walk the dog',
	'Clean the dishes',
	'buy groceries',
	'order food',
];

console.log(getPermutations(todoListItems));

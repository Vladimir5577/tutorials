// Count amount of coins for certain amount of payment

function computeChange (coins, amount) {
	let remainingAmount = amount;
	const transformedCoins = {};

	const calculatedChange = {
		selectedCoins: transformedCoins,
		numberOfCoins: 0
	};

	for (const coin of coins) {
		const count = Math.floor(remainingAmount / coin);
		calculatedChange[coin] = count;
		calculatedChange.numberOfCoins += count;
		remainingAmount = remainingAmount - coin * count;
	}

	return calculatedChange;
}

const availableCoins = [100, 50, 20, 10, 5, 2, 1];

const targetAmount = 129; 
// 1 - 100, 1 - 20, 1 - 5, 2 - 2


const change = computeChange(availableCoins, targetAmount);
console.log(change);

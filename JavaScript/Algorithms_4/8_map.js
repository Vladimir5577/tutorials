// Double funciton 
console.log('--------------------------------------------');
console.log('Double funciton ----------------------------');

const double = num => 2 * num;
const doubleEach = input => input.map(double);

const arr = [3, 5, 10, 55];
console.log(doubleEach(arr));


console.log('--------------------------------------------');
console.log('Square funcion -----------------------------');

const square = num => num * num;
const squareEach = input => input.map(square);

const arr2 = [2, 5, 6, 12];
console.log(squareEach(arr2));


console.log('--------------------------------------------');
console.log('Combine double and square funcion ----------');

const doubleAndSquareEach = input => input.map(double).map(square);

const arr3 = [2, 5, 6, 7, 8];
console.log(doubleAndSquareEach(arr3));


console.log('--------------------------------------------');
console.log('Custom map funcion -------------------------');

const myMap = (array, fn) => {
	const answer = [];
	for (let i = 0; i < array.length; i++) {
		answer.push(fn(array[i]));
	}

	return answer;
};

const arr4 = [2, 3, 5, 6, 8];
const divideByTwo = num => num / 2;
console.log(myMap(arr4, divideByTwo));

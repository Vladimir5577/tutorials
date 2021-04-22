let write = (msg = '---------------') => console.log(msg);

function basicRecursion (max, current) {
	if (current > max) return;
	write(current);
	basicRecursion(max, current + 1);
}

basicRecursion(5, 1);

write();
write('Fibonacci');
write();

// ===================================
// Fibonacci

function fibonacci (n) {
	if (n <= 2) { 	// or - if (n === 0 || n === 1)
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

for (var i = 1; i <= 20; i++) {
	write(`${i} --- ${fibonacci(i)}`);
}

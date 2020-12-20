var x = 40;

x++;	// 40
x;		// 41

++x; 	// 42
x;		// 42

// ===========================================

var x = "5";
x = x + 1;		// "51"

var y = "5";
y++; 			// 5
y;				// 6

// ===========================================

function plusPlus (orig_x) {
	var orig_x_coerced = Number(orig_x);
	x = orig_x_coerced + 1;
	return orig_x_coerced;
}

var x = "5";
plusPlus(x);	// 5
x; 				// 6

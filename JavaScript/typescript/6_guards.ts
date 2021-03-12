function strip (x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	}

	return x.trim();
}

// ========================

class MyResponse {
	header = 'header';
	message = 'messge';
}

class MyError {
	header = 'error header';
	message = 'error message';
}

function handle (res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return res.header + res.result;
	} else {
		return info.header + res.message;
	}
}

// =====================================

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType (type: AlertType) {
	// .........
}

setAlertType('success');
setAlertType('warning');
// setAlertType('default'); // -- error "default" not a type
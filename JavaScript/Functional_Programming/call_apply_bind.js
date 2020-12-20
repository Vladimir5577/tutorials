function Car (model) {
	/*
	// for browser
	if(this === global || this === window) {
		return new Car(model);
	}
	*/
	this.model = model;
}

Car.prototype.ride = function (ride) {
	console.log(this.model + ride);
};



var car = new Car('Mercedes');
console.log(car.model);
console.log(car.ride('Fast riding'));


var bmw = {
	model: 'BMW'
};

car.ride.apply(bmw, [' good ride']);

var dodge = {
	model: 'Dodge'
};

car.ride.call(dodge, ' travelling');

var mustang = {
	model: 'Mustang'
};

var mustangBind = car.ride.bind(mustang);
mustangBind(' Perfect car');

function User(name) {
	this.name = name;
	this.sayHai = function(sufix) {
		console.log(this.name + sufix); //
	}
}


var u1 = new User("Bob");
u1.sayHai(" says hai");		 // Bob says hai

var jack = {
	name: "Jack"
};

u1.sayHai.apply(jack, [" says hai"]);	 // Jack says hai 

var jim = {
	name: "jim"
};

var newBindedSayHai = u1.sayHai.bind(jim);	 // returns function
newBindedSayHai(" saays hai");				 // Jim saays hai 

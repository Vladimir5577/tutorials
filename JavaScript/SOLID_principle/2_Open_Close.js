// Open Close Principle

// Class should be open for extension but close for modification
//
// in this task need find sum of  square of every figures

class Shape {
	area () {
		throw new Error('Area method should be implemented');
	}
}

class Square extends Shape {
	constructor (size) {
		super();
		this.size = size;
	}

	area () {
		return this.size ** 2;
	}
}

class Circle extends Shape {
	constructor (radius) {
		super();
		this.radius = radius;
	}

	area () {
		return (this.radius ** 2) * Math.PI;
	}
}

class Rect extends Shape {
	constructor (width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	area () {
		return this.width * this.height;
	}
}

class Triangle extends Shape {
	constructor (a, b) {
		super();
		this.a = a;
		this.b = b;
	}

	area () {
		return (this.a * this.b) / 2;
	}
}

// this class closed for modification
class AreaCalculator {
	constructor (shapes) {
		this.shapes = shapes;
	}

	sum () {
		return this.shapes.reduce((acc, shape) => {
			acc += shape.area();
			return acc;
		}, 0);
	}
}

// this class open for extension
const calc = new AreaCalculator([
	new Square(10),
	new Circle(1),
	new Circle(5),
	new Rect(10, 20),
	new Triangle(10, 15)
]);

console.log(calc.sum());


 
/**
 *	If we will add new fifure we shouldn't change AreaCalculator class
 *
 * To mantain the code, we need to crete universal class Shape 
 * and extend it in other fifure classes
 *
 *
 *
 * */

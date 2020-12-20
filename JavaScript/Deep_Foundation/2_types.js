/*
Types:
	- Primitive Types
		- string
		- number
		- boolean
		- undefined
		- null
		- symbol
		- bigInt
		- Fundamental Object
			Use new:
				- Object()
				- Array()
				- Function()
				- Date()
				- RegExp()
				- Error()
			Don't use new 
				- String()
				- Number()
				- Boolean()

	- Abstract Operations
	- Coercion
	- Equality
	- TypeScript, Flow, etc.
	----------------------------
	- undefined
	- string
	- number
	- boolean
	- object
	- symbol
	- 
	----------------------------
	- undeclared ?
	- null ?
	- function ? 
	- array ?
	- bigint ?
======================================================
	
Objects:
	- object
	- function 
	- array

Not object:
	- undefined
	- string
	- number
	- boolean
	- object
	- symbol
	- null
	- bigint(future)
		

In JavaScript variables don't have types, value do.


======================================================


undeclared ---  never been created in any scope

undefined --- it is a variable but in this moment not have a value

uninitialized  ---  never even created (aka TDZ - temporaty dead zone)

*/

var v;
typeof v; 	// undefined

v = "1";
typeof v; 	// string

v = 2;
typeof v;	// number

v = true;
typeof v;	// boolean

v = {};
typeof v;	// object

v = Symbol();
typeof v; 	// symbol

typeof doesntExist;		// undefined

var v = null;
typeof v; 		// object

v = function(){}
typeof v;		// function 

v = [1, 2, 3];
typeof v; 		// object

var v = 42n;
// or: BigInt(42)
typeof v;		// bigint


//======================================================

var a = Number("0o46");		// 38
var b = Number("39");		// 39
var c = Number("abc");		// NaN
a - "sdf";					// NaN

c === c 					// false
NaN === NaN 				// false

isNaN(a);					// false
isNaN(b);					// true
isNaN("sdf");				// true

Number.isNaN(c);			// true
Number.isNaN("sdf");		// false


var trendRate = -0;
trendRate === -0;			// true

trendRate.toString();		// "0"
trendRate === 0;			// true
trendRate < 0;				// false
trendRate > 0;				// false

Object.is(trendRate, -0);	// true
Object.is(trendRate, 0); 	// false


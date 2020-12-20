// ===============================================================

ToPrimitive(hint);  ---  to convert in primitive value

	hint: "number"
		- valueOf()
		- toString()

	hint: "string"
		- toString()
		- valueOf()

// ===============================================================


ToString   ---  to take every value and convert it into the string

	null		 => "null"
	undefined	 => "undefined"
	true		 => "true"
	false		 => "false"
	3.14159		 => "3.14159"
	0 			 => "0"
	-0 			 => "0"

	[] 			 => ""
	[1, 2, 3] 	 => "1, 2, 3"
	[[[],[]],[]] => ",,,"
	[,,,]		 => ",,,"
	[null, undefined] => ","

	{} 			=> "[object Object]"
	{a: 2} 		=> "[object Object]"
	{ toString () {return "X"; } } => "X"

// ===============================================================


ToNumber

	""			 => 0
	"0"			 => 0
	"-0"		 => -0
	" 009 "		 => 9
	"3.14159"	 => 3.14159
	"0."		 => 0
	".0"		 => 0
	"."			 => NaN
	"0xaf"		 => 175

	false		 => 0
	true		 => 1
	null		 => 0
	undefined	 => NaN

	[""]		 => 0
	["0"]		 => 0
	["-0"]		 => -0
	[null]		 => 0
	[undefined]	 => 0
	[1, 2, 3]	 => NaN
	[[[]]]		 => 0


	{..}		 => NaN
	{ valueOf() { return 3; }} => 3

// ===============================================================

ToBoolean  ---  to look up on the value

	Falsy
		- 0, -0
		- null
		- NaN
		- false
		- undefined

	Truthy
		- "  "
		- "foo"
		- 24
		- { a: 1 }
		- [1, 2, 3]
		- true
		- function(){..}


// ===============================================================


Coersion: corner cases

	Number( "" );			 => 0
	Number( " \t\n" );		 => 0
	Number( undefined );	 => NaN
	Number( [] );			 => 0
	Number( [1, 2, 3] );	 => NaN
	Number( [null] );		 => 0
	Number( [undefined] );	 => 0
	Number( {} );			 => NaN

	String( -0 );			 => "0"
	String( null );			 => "null"
	String( undefined );	 => "undefined"
	String( [null] );		 => ""
	String( [undefined] );	 => ""

	Boolean( new Boolean(false) ); => true

	Number(true);			 => 1
	Number(false);			 => 0

	1 < 2; => true
	1 > 1; => false



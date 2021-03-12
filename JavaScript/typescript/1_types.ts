// Types

// boolean
const load: boolean = true;
const fetch: boolean = false;

// number
const a: number = 34;
const b: number = 3.14;
const c: number = 3e10;

// string
const message: string = 'Hello';

// array
const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Bob', 123];

// any
let variable: any = 12;
variable = 'New data';

// =======================

function sayName (name: string): void {
	console.log(name);
}
sayName('Bob');

// Never
function throwError (message: string): never {
	throw new Error(message);
}

// Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';

type SomeType = string | null | undefined;
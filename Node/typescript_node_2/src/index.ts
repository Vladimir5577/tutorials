import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

interface Params {
	a: number;
	b: number;
};

type Add = (x: Params) => number;

const add: Add = x => {
	return x.a + x.b;
};

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	const result: number = add({ a: 1, b: 2 });
	console.log(result);
	res.send(`Hello World, ${result}`);
});

app.listen(3001, () => {
	console.log('Server running on the port 3001');
});
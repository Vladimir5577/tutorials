"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
;
const add = x => {
    return x.a + x.b;
};
app.get('/', (req, res, next) => {
    const result = add({ a: 1, b: 2 });
    console.log(result);
    res.send(`Hello World, ${result}`);
});
app.listen(3001, () => {
    console.log('Server running on the port 3001');
});

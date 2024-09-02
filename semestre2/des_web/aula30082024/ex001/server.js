"use strict";
// npm i express
// npm i -D @types/node @types/express
// npm i -D 
// npx tsc
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});

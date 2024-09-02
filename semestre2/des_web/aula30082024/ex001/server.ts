// npm i express
// npm i -D @types/node @types/express
// npm i -D 
// npx tsc

import express from 'express'
import {Request, Response} from 'express'

const app = express()
const port = 3000

app.get('/',(req: Request, res: Response)=>{
    res.send('Olá mundo!')

})

app.listen(port, ()=>{
    console.log(`Server rodando em http://localhost:${port}`)
});
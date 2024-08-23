import express from "express";

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (requisicao, resposta)=>{
    resposta.send('Olá mundo!!!')
})
app.get('/teste', (requisicao, resposta)=>{
    resposta.send('Teste XYZ')
})
app.get('/testejson', (requisicao, resposta)=>{
    resposta.json({msg: "Teste JSON..."})
})

let numero = 9
let tabuadaPronta = ''

for (let i = 1; i <= 10; i++) {
    tabuadaPronta += `<p style="margin: 0; text-align: center;">${numero} X ${i} = ${numero*i}</p>`
    tabuadaPronta += '\n'
    
}

app.get('/tabuada', (req, res)=>{
    res.send(`${tabuadaPronta}`)
})
app.listen(port, ()=>{
    console.log(`API Rodando em http://localhost:${port}`);
})

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

let numero = 0
let tabuadaPronta = `<p style="margin: 0; padding-top: 1em; text-align: center;> </p>`

for (let i = 1; i <= 10; i++) {
    tabuadaPronta += `<p style="margin: 0; padding-top: 1em; text-align: center;> </p>`
    for (let j = 1; j <= 10; j++) {
        tabuadaPronta += `<p style="margin: 0; text-align: center;">${i} X ${j} = ${i*j}</p>`
        
    }
    
    
}

app.get('/tabuada', (req, res)=>{
    res.send(`${tabuadaPronta}`)
})
app.listen(port, ()=>{
    console.log(`API Rodando em http://localhost:${port}`);
})

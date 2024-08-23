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



app.get('/tabuada/:numero', (req, res)=>{
    let numero = Number(req.params.numero)
    let tabuadaPronta = []

    for (let i = 1; i <= 10; i++) {
    tabuadaPronta.push(`<p style="margin: 0; text-align: center;">${numero} X ${i} = ${numero*i}</p>`)
    
    
}
    res.send(tabuadaPronta.join("\n"))
})
app.listen(port, ()=>{
    console.log(`API Rodando em http://localhost:${port}`);
})

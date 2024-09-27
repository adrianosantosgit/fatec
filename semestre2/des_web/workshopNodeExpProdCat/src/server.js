import express from 'express'
import routes from './routes/index.js'
// import swaggerUi from 'swagger-ui-express'
// import swaggerFile from './swagger-output.json' with { type: "json" }; // Carregar o arquivo JSON

const app = express()

app.use(express.json())
app.use('/api', routes)
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)) // Adicionar a rota para visualizar a documentação

const PORT = 3000

app.get('/', (req, res) => {res.send("Hello World rota principal")})

app.listen(PORT, () => {console.log(`Server executando em http://localhost:${PORT}`);})


console.log('Hello World')
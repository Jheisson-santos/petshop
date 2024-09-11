const express = require("express")
const app = express()
const port = 3000
const cliente = require("./routers/cliente")
const pet = require("./routers/pet")

app.use(express.json())
app.use('/cliente', cliente)
app.use('/pet', pet)



app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})

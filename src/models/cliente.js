const db = require("../db.js")
const Schema = db.Schema

const clienteSchema = new Schema ({
    nome:{
        type: String,
        required: true
    },
    endereco:{
        type: Object,
        required: true
    },
    numero_casa:{
        type: String,
        required: true
    },
    telefone:{
        type: Array,
        required: true
    }
})

const Cliente = db.model("Cliente", clienteSchema)

module.exports = Cliente
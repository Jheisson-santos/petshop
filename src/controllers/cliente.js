const Cliente = require("../models/cliente")

const store = async (req, res)=>{
    console.log(req.body)
    try{
        const content = new Cliente(req.body)
        await content.save()
        res.status(201).json(content)
    }catch (err){
        res.status(400).json({err: "Erro ao cadastrar"})
    }
}

const index = async (req, res)=>{
    try{
        const content = await Cliente.find()
        res.status(201).json(content)
    }catch (err){
        res.status(400).json({err: "Erro ao pesquisar"})
    }
}

const show = async (req, res)=>{
    try{
        const content =  await Cliente.findById(req.params.id)
        res.status(201).json(content)
    }catch (err){
        res.status(400).json({err: "Erro ao pesquisar"})
    }
}

const update = async (req,res)=>{
    try{
        const content = await Cliente.findByIdAndUpdate(req.params.id,  req.body)
        res.status(200).json(content)
    }catch (err){
        res.status(400).json({err: "Erro ao atualizar"})
    }
}

const destroy = async (req,res) =>{
    try{
        await Cliente.findByIdAndDelete(req.params.id)
        res.status(204).json()
    }catch (err){
        res.status(400).json({err: "Erro ao deletar"})
    }
}

module.exports = {store, index, show, update, destroy}
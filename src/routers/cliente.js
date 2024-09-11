const express = require("express")
const router = express.Router()
const Cliente = require("../controllers/cliente.js")
const cep = require("../middlewares/cep.js")

router.get("/", Cliente.index)
router.get("/:id", Cliente.show)
router.post("/",cep, Cliente.store)
router.put("/:id",cep,Cliente.update)
router.delete("/:id", Cliente.destroy)

module.exports = router
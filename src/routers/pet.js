const express = require("express")
const router = express.Router()
const Pet = require("../controllers/pet.js")

router.get('/', Pet.index)
router.get('/:id', Pet.show)
router.post('/', Pet.store)
router.put('/:id', Pet.update)
router.delete('/:id', Pet.destroy)

module.exports = router
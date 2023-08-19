const express = require('express')
const teamController = require('../../controller/team')
const router = express.Router()

router.get("/", teamController.index)
router.get("/:id", teamController.findOne)
router.get("/findByUser/:id", teamController.findByIdUser)
router.post('/add',teamController.addOne)
router.delete('/delete/:id', teamController.delete)
router.put('/update/:id',teamController.update)


module.exports = router

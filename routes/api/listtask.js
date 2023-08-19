const express = require('express');
const listTaskController = require('../../controller/listTask')
const router = express.Router();

router.get("/", listTaskController.index);
router.get("/:id", listTaskController.findOne);
router.get("/findByWorkspace/:id", listTaskController.findByIdWsp);
router.post('/add',listTaskController.addOne)
router.delete('/delete/:id',listTaskController.delete)
router.put('/update/:id',listTaskController.update)

module.exports = router
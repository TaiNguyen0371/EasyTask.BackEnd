const express = require('express');
const taskController = require('../../controller/task')
const router = express.Router();

router.get("/", taskController.index);
router.get("/:id", taskController.findOne);
router.get("/findByList/:id", taskController.findByIdList);
router.post('/add',taskController.addOne)
router.delete('/delete/:id',taskController.delete)
router.put('/update/:id',taskController.update)
module.exports = router
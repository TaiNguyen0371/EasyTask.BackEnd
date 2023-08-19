const express = require('express');
const workspaceController = require('../../controller/workspace')
const router = express.Router();

router.get("/", workspaceController.index);
router.get("/:id", workspaceController.findOne);
router.get("/findByTeam/:id", workspaceController.findByIdTeam);
router.post('/add',workspaceController.addOne)
router.delete('/delete/:id',workspaceController.delete)
router.put('/update/:id',workspaceController.update)

module.exports = router

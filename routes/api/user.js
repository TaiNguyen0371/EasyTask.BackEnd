const express = require('express');
const bcrypt = require('bcrypt')
const userController = require('../../controller/user')
const router = express.Router();

router.get("/", userController.index);
router.get("/:id", userController.findOne);
router.post('/add',userController.addOne)
router.post('/signin',userController.signIn)

module.exports = router

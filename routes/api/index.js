const express = require('express');
const router = express.Router();

const userApi = require('./user')
const teamApi = require('./team')
const workSpaceApi = require('./workspace')
const listTaskApi = require('./listtask')
const taskApi = require('./task')

router.use('/user',userApi)
router.use('/team',teamApi)
router.use('/workspace',workSpaceApi)
router.use('/listtask',listTaskApi)
router.use('/task',taskApi)

module.exports = router;

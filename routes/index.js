
const { UserController } = require('../controllers/userController')
const { errorHandler } = require('../middlewares/errorHandlers')

const router = require('express').Router()

router.post('/register', UserController.postRegister)

router.use(errorHandler)

module.exports = router
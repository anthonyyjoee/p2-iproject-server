
const { UserController } = require('../controllers/userController')
const { errorHandler } = require('../middlewares/errorHandlers')

const router = require('express').Router()

router.post('/register', UserController.postRegister)

router.post('/login', UserController.login)


router.use(errorHandler)

module.exports = router
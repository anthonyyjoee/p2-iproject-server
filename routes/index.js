const { UserController } = require('../controllers/userController')
const { errorHandler } = require('../middlewares/errorHandlers')
const { authentication } = require('../middlewares/authentication')
const { FeatureController } = require('../controllers/featureController')
const router = require('express').Router()


router.post('/register', UserController.postRegister)

router.post('/login', UserController.login)

router.use(authentication)

router.post('/postmusic', FeatureController.uploadMusic)

router.use(errorHandler)

module.exports = router
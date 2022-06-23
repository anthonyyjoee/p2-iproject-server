const { UserController } = require('../controllers/userController')
const { errorHandler } = require('../middlewares/errorHandlers')
const { authentication } = require('../middlewares/authentication')
const { FeatureController } = require('../controllers/featureController')
const { stripejs } = require('../controllers/stripe')
const router = require('express').Router()



router.post('/register', UserController.postRegister)

router.post('/login', UserController.login)

router.use(authentication)

router.post('/postmusic', FeatureController.uploadMusic)

router.get('/posts', FeatureController.getPost)

router.post('/create-checkout-session', stripejs);

router.use(errorHandler)

module.exports = router
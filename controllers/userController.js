const { User } = require('../models')
const { Helper } = require('../helper')
const secretKey = process.env.SECRET_KEY



class UserController {
  static async postRegister(req, res, next) {
    try {
      const { username, email, password, profilePictureUrl } = req.body
      const createdUser = await User.create({
        username,
        email,
        password: Helper.hash(password),
        balance: 0,
        profilePictureUrl
      })

      res.status(201).json({
        data: {
          id: createdUser.id,
          email: createdUser.email,
          username: createdUser.username
        }
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const findUser = await User.findOne({ where: { email: email } })
      if (!findUser) throw { name: 'Invalid email or password' }

      const isPasswordValid = Helper.compare(password, findUser.password)
      if (!isPasswordValid) throw { name: 'Invalid email or password' }

      const payload = {
        id: findUser.id,
        email: findUser.email,
      }

      const token = Helper.createToken(payload, secretKey)

      res.status(200).json({
        data: {
          accessToken: token,
          username: findUser.username,
          balance: findUser.balance,
          profilePicuteUrl: findUser.profilePictureUrl
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = { UserController }
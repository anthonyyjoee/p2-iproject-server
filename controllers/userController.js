const { User } = require('../models')
const { Helper } = require('../helper')


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
}

module.exports = { UserController }
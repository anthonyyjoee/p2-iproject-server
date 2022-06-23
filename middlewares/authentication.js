const { Helper } = require('../helper')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
      const { access_token } = req.headers
      if (!access_token) throw { name: "Invalid token" }
  
      const payload = Helper.readToken(access_token)
      const findUser = await User.findByPk(payload.id)
      if (!findUser) throw { name: "Invalid token" }
  
      req.user = payload
  
      next()
    } catch (err) {
      next(err)
    }
}

module.exports = { authentication }
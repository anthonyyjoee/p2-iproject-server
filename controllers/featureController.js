const { Post } = require('../models')

class FeatureController {
  static async uploadMusic(req, res, next) {
    try {
      const { title, audioUrl, imageUrl, caption } = req.body
      const { id: UserId } = req.user

      await Post.create({ UserId, title, audioUrl, imageUrl, caption })
      res.status(201).json({
        message: 'Successfully posted'
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = { FeatureController }
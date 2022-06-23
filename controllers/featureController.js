const { Post, User } = require('../models')

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

  static async getPost(req, res, next) {
    try {
      const option = {
        order: [["createdAt", "DESC"]],
        include: {
          model: User,
          attributes: ["id", "username", "profilePictureUrl"]
        }
      }
      const posts = await Post.findAll(option)

      res.status(200).json({
        data: posts
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = { FeatureController }
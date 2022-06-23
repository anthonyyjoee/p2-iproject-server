'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User)
    }
  }
  Post.init({
    UserId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Title cannot be empty"},
        notEmpty: { msg: "Title cannot be empty" }
      }
    },
    audioUrl: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    caption: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
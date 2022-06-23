'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Post)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Username Cannot be empty" },
        notEmpty: { msg: "Username cannot be empty" }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {msg: "Email must be unique"},
      allowNull: false,
      validate: {
        notNull: { msg: "Email Cannot be empty" },
        notEmpty: { msg: "Email cannot be empty" }
      }
    },
    profilePictureUrl: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Password Cannot be empty" },
        notEmpty: { msg: "Password cannot be empty" }
      }
    },
    balance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
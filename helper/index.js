require('dotenv').config()
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

class Helper {
     static hash(pwd) {
          return bcrypt.hashSync(pwd, 10);
     }

     static compare(input, pwd) {
          return bcrypt.compareSync(input, pwd);
     }

     static createToken(payload) {
          console.log(secretKey);
          return jwt.sign(payload, secretKey)
     }

     static readToken(token) {
          return jwt.verify(token, secretKey)
     }
}

module.exports = { Helper };

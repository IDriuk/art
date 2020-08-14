const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


module.exports.register = async function(req, res) {
  let token = ''
  const { email, password } = req.body
  
  try {
    let user = await User.findOne({email: req.body.email})

    if (user) {
      const isPasswordsMatch = bcrypt.compareSync(req.body.password, user.password)
      if (!isPasswordsMatch) {
        res.status(401).json({
          message: 'Passwords not match'
        })
        return
      }
    } else {
      const salt = bcrypt.genSaltSync(10)
      user = await User({
        email,
        password: bcrypt.hashSync(password, salt)
      }).save()
    }

    token = jwt.sign({
      email: user.email,
      userId: user._id
    }, keys.jwt, {expiresIn: 60 * 60 * 24})

    res.status(200).json({
      token: `Bearer ${token}`
    })
  } catch(e) {
    errorHandler(res, e)
  }
}
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


module.exports.register = async function(req, res) {
  let token = ''
  const { email, password } = req.body
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      
      token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      
      res.status(401).json({
        message: 'Passwords not match'
      })
    }
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      email,
      password: bcrypt.hashSync(password, salt)
    })

    try {
      await user.save()
      const newUser = await User.findOne({email: req.body.email})

      token = jwt.sign({
        email: newUser.email,
        userId: newUser._id
      }, keys.jwt, {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`
      })
      
    } catch(e) {
      errorHandler(res, e)
    }

  }
}
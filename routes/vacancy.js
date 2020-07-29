const express = require('express')
const passport = require('passport')
const controller = require('../controllers/vacancy')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

module.exports = router
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const vacancyRoutes = require('./routes/vacancy')
const vocabularyRoutes = require('./routes/vocabulary')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))
mongoose.set('useCreateIndex', true);

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/vacancy', vacancyRoutes)
app.use('/api/vocabulary', vocabularyRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, 'client', 'build', 'index.html'
      )
    )
  })

}


module.exports = app
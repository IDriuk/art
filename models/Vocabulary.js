const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vocabularySchema = new Schema({
  phrase: {
    type: String,
    required: true
  },
  link_to_video: {
    type: String,
    default: ''
  },
  /* if no video, then add some description, how and where find audio */
  location: {
    type: String,
    default: ''
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('vocabulary', vocabularySchema)
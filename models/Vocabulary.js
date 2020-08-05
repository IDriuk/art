const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vocabularySchema = new Schema({
  created: { 
    type: Date, 
    default: Date.now 
  },
  phrase: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  tags: {
    type: [String],
    default: []
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('vocabulary', vocabularySchema)
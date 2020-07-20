const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vacancySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    default: ''
  },
  /* person from company for communication about vacancy */
  contact: {
    type: String,
    default: ''
  },
  /* platform where vacancy finded */
  platform: {
    type: String,
    default: ''
  },
  /* vacancy href */
  link: {
    type: String,
    default: ''
  },
  /* google doc with communication and actions around vacancy */
  doc_link: {
    type: String,
    default: ''
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('vacancies', vacancySchema)
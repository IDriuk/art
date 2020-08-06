const Vocabulary = require('../models/Vocabulary')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
  const query = {
    user: req.user._id
  }

  try {
    const vocabulary = await Vocabulary
      .find(query)
      .sort({date: -1})

    res.status(200).json(vocabulary)

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
  try {

    const { phrase, link, description } = req.body
    const { _id } = req.user

    const result = await new Vocabulary({
      phrase,
      link,
      description,
      user: _id
    }).save()

    res.status(201).json(result)
  } catch (e) {
    errorHandler(res, e)
  }
}
const Vocabulary = require('../models/Vocabulary')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
  const query = {
    user: req.user._id
  }

  try {
    const vocabulary = await Vocabulary
      .find(query)
      .sort({description: 1, date: -1})

    res.status(200).json(vocabulary)

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
  try {

    const { phrase, link, start, end, tags, description } = req.body
    const { _id } = req.user

    const result = await new Vocabulary({
      phrase,
      link,
      description,
      start,
      end,
      tags: tags.split(' ') || [],
      user: _id
    }).save()

    res.status(201).json(result)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req, res) {
  try {
    await Vocabulary.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Phrase deleted from vocabulary list, check that phrase cuted from video'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function(req, res) {
  const { phrase, link, start, end, tags, description } = req.body

  const updated = {
    phrase, 
    link, 
    start, 
    end, 
    description, 
    tags: tags.split(' ') || [],
    updated: Date.now()
  }

  try {
    const phrase = await Vocabulary.findOneAndUpdate(
      {_id: req.params.id},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(phrase)
  } catch (e) {
    errorHandler(res, e)
  }
}
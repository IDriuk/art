const Vocabulary = require('../models/Vocabulary')
const errorHandler = require('../utils/errorHandler')

// (get) localhost:5000/api/vocabulary?offset=2&limit=5
module.exports.getAll = async function(req, res) {
  const query = {
    user: req.user.id
  }

  if (req.query.start) {
    query.date = {
      $gte: req.query.start
    }
  }

  if (req.query.end) {
    if (!query.date) {
      query.date = {}
    }

    query.date['$lte'] = req.query.end
  }

  if (req.query.vocabulary) {
    query.vocabulary = +req.query.vocabulary
  }

  try {
    const vocabulary = await Vocabulary
      .find(query)
      .sort({date: -1})
      .skip(+req.query.offset)
      .limit(+req.query.limit)

    res.status(200).json(vocabulary)

  } catch (e) {
    errorHandler(res, e)
  }
}

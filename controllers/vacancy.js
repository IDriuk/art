const Vacancy = require('../models/Vacancy')
const errorHandler = require('../utils/errorHandler')

// (get) localhost:5000/api/vacancy?offset=2&limit=5
module.exports.getAll = async function(req, res) {
  const query = {
    user: req.user.id
  }

  // Дата старта
  if (req.query.start) {
    query.date = {
      // Больше или равно
      $gte: req.query.start
    }
  }

  if (req.query.end) {
    if (!query.date) {
      query.date = {}
    }

    query.date['$lte'] = req.query.end
  }

  if (req.query.vacancy) {
    query.vacancy = +req.query.vacancy
  }

  try {
    const vacancies = await Vacancy
      .find(query)
      .sort({date: -1})
      .skip(+req.query.offset)
      .limit(+req.query.limit)

    res.status(200).json(vacancies)

  } catch (e) {
    errorHandler(res, e)
  }
}

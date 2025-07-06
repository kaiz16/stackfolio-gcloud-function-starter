const respond = require('../helpers/respond')

const health = (req, res) => {
  return respond(
    {
      status: 200,
      message: 'Success',
      data: {
        name: 'stackfolio-gcloud-function-starter',
        version: 'v1',
        env: process.env.NODE_ENV,
        timestamp: new Date(),
      },
      errors: null,
    },
    res,
  )
}

module.exports = health

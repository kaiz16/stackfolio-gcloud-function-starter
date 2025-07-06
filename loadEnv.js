const loadEnv = () => {
  require('dotenv').config({
    path: process.cwd() + `/.env.${process.env.NODE_ENV}`,
  })
}

module.exports = loadEnv

const respond = ({ status, message, data, errors }, res) => {
  return res.status(status).json({
    status,
    message,
    data,
    errors,
  })
}

module.exports = respond

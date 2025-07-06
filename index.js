const loadEnv = require('./loadEnv')
loadEnv()
const health = require('./handlers/health')

// Path: index.js
exports['index'] = async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', ['GET', 'POST'])
    res.set('Access-Control-Allow-Headers', [
      '*',
      'Content-Type',
      'Authorization',
    ])
    res.set('Access-Control-Max-Age', '3600')
    return res.status(204).send('')
  }
  switch (req.path) {
    case '/health':
      return health(req, res)
    // Define more paths here
    default:
      res.send('function not defined')
  }
}

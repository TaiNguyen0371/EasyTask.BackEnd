const api = require('./api')

function route(app) { 
  app.use('/api',api)
}

module.exports = route
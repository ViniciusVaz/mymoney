const server = require('./config/server')
require('./config/database')
require('./api/billingCycle/routes')(server)
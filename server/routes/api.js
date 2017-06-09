const jsonServer = require('json-server')
const router = jsonServer.create()
const path = (name) => (require('../api/'+name))

// API
router.get('/contact-groups', path('ContactGroups').index);

module.exports = router
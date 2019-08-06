let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/userCount')
  .get(controllers.getUsers)
  .patch(controllers.updateUserCount)


module.exports = router
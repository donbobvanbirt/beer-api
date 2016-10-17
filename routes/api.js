const express = require ('express')
const router = express.Router()

router.use('/random', require('./random'))
router.use('/favorite', require('./favorite'))

module.exports = router

const express = require ('express')
const router = express.Router()
const BeerApi = require('../models/BeerApi')

router.use((req, res, next) => {
  res.handle = (err, data) => res.status( err ? 400 : 200).send(err || data)
  next()
})

router.route('/')
.get(( req, res ) => {
  BeerApi.getRand(res.handle)
  console.log('making api call')
})

module.exports = router

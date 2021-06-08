const express = require('express')
const router = express.Router()

router.post('/upload', function (req, res, next) {
  console.log("Hey")
})

router.get('/upload', function (req, res, next) {
  res.send('lkfjlskdj')
})

module.exports = router
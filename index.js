const express = require('express')
const app = express()

app.use(express.json({extended: true}))
const PORT = process.env.PORT || 5000

app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {
  console.log('App has been started', PORT)
})
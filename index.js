const express = require('express')
const app = express()

app.use(express.json({extended: true}))
const PORT = 5000



app.post('/', (req, res) => {
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log('App has been started', PORT)
})
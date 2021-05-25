const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql')

const app = express()
app.use(express.json({extended: true}))

dotenv.config({path: './.env'})

const PORT = process.env.PORT || 5000

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD
})

db.connect((error) => {
  if (error) {
    console.log(error)
  } else (
    console.log('My SQL connected')
  )
})

app.use('/api', require('./routes/auth'))

app.listen(PORT, () => {
  console.log('App has been started', PORT)
})
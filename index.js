const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
}).single('myImage')

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    return cb('Можно загружать только изображения')
  }
}

const app = express()
app.use(express.json({extended: true}))
app.use(express.static('/public'))

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
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) { // результат работы функции проверки типа файла
      res.send({
        msg: err
      })
    } else {
      if (req.file === undefined) {
        res.send({
          msg: 'Ошибка, файл не выбран'
        })
      } else {
        res.send({
          msg: 'Файл загружен',
          file: `uploads/${req.file.filename}`
        })
      }
    }
  })
  console.log()
})

app.listen(PORT, () => {
  console.log('App has been started', PORT)
})
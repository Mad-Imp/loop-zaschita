const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const mailer = require('./nodemailer')

const app = express()
app.use(express.json({extended: true}))
app.use(express.static('public'))
app.use(express.static('public/uploads'))

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

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

dotenv.config({path: './.env'})

const PORT = process.env.PORT || 5000

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD
})

// db.connect((error) => {
//   if (error) {
//     console.log(error)
//   } else (
//     console.log('My SQL connected')
//   )
// })

app.use('/api', require('./routes/auth'))

const upload = multer({
  storage: storage, fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
}).single("file")

app.post('/upload', function (req, res, next) {
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
          file: `http://localhost:5000/${req.file.filename}`
        })
      }
    }
  })
})

app.post('/api/publish', function (req, res, next) {
  let post = req.body
  console.log(post)

  let date = "" + new Date().toLocaleDateString()

  if (post.images.length === 0) {
    post.images = 0
  }

  let sql = "INSERT INTO news (date, title, description, images) VALUES ?"
  let values = [
    [date, post.header, post.article.replace(/\/n/g, '///'), post.images],
  ];
  db.query(sql, [values], function (err) {
    if (err) {
      res.send({
        status: 500,
      })
      throw err
    }
    res.send({
      status: 200,
    })
  });

  // res.send({
  //   status: 200,
  //   msg: 'Новость сохранена'
  // })
})

app.get('/api/news', (req, res) => {
  let sql = "SELECT * FROM `news`"
  db.query(sql, (err, results, fields) => {
    if (err) throw err
    res.send(results)
  });
})

app.post('/api/delete', (req, res) => {
  let id = req.body.id
  console.log(id)
  let sql = `DELETE FROM news WHERE id = ${id}`
  db.query(sql, (err, results, fields) => {
    if (err) throw err
    res.send(results)
  })
})

app.post('/api/refreshnews', (req, res) => {
  let id = req.body.id
  const sql = `UPDATE news SET title=?, description=?, images=? WHERE id=${id}`;
  const data = [req.body.header, req.body.article, req.body.images];
  db.query(sql, data, (err, results, fields) => {
    if (err) throw err
    res.send(results)
  })
})

app.post('/postemail', (req, res) => {
  const message = {
    from: "<zaschita@zaschita48lip.ru>",
    to: 'mortido3@mail.ru',
    subject: "Обращение с сайта",
    html: ` 
    <h1>Данное обращение пришло с сайта: zaschita48lip.ru</h1>
    <h2>Имя отправителя: ${req.body.name}</h2>
    <h2>Почта отправителя: ${req.body.email}</h2>
    <h2>Текс сообщения: ${req.body.text}</h2>
    `
  }
  mailer(message, res)
})

app.use(cors())

app.listen(PORT, () => {
  console.log('App has been started', PORT)
})
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD
})

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: 'Вы не ввели email или пароль'
      })
    }

    db.query('SELECT * FROM `users` WHERE email = ?', [email], async (error, results) => {
      if (!(results.length) || !(await bcrypt.compare(password, results[0].password))) {
        res.status(401).json({
          message: 'Неверный пароль или email'
        })
      } else {
        const id = results[0].id
        const token = jwt.sign({id}, process.env.JWT_SECRET, {
          expiresIn: '1h'
        })
        const data = {
          token: token,
          role: 'admin'
        }
        console.log(data)
      }
    })

  } catch (e) {
    console.log(e)
  }
}

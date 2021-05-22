const connection = require('../db/db')

module.exports.login = async function (req, res) {

  connection.connect((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Connection......ok')
    }
  })

  connection.end((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(('Connetion end'))
    }
  })
}

module.exports.users = async function (req, res) {
 await connection.query('SELECT * FROM `users`', (err, result, field) => {
   res.json(result[0]);
 })

  connection.end((err) => {
    if (err) {
     throw err
    } else {
      console.log(('Connetion end'))
    }
  })
}
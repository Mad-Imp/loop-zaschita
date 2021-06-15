const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: 'smtp.beget.com',
  port: 465,
  secure: true,
  auth: {
    user: 'zaschita@zaschita48lip.ru',
    pass: '3W%sahf3'
  }
})

const mailer = (message, res) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      return res.send({
        status: 500
      })
    }
    res.send({
      status: 200
    })
  })
}

module.exports = mailer
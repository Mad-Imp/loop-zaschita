const mysql = require('mysql')

const connect = mysql.createConnection({
  host: "mortido.beget.tech",
  user: "mortido_rz",
  database: "mortido_rz",
  password: "7M6e8R7X"
})

module.exports = connect
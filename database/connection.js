const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'db_movies'
})


connection.connect((err) => {
    if (err) throw err.message
    console.log('Connection succesfull');
})


module.exports = connection
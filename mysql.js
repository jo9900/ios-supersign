const mysql = require('mysql')
const pool = mysql.createPool({
    host: ' 192.168.0.60',
    port: 3306,
    user: 'zhengyuan',
    password: 'zhengyuan',
    database: 'ios_super_sign'
})

module.exports.query = (sql, callback) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query(sql, function (error, results, fields) {
            // When done with the connection, release it.
            callback(results, fields)
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

// let sql = 'SELECT * FROM `books` WHERE `author` = ?'
// let params = ['David']
// query(sql, params, function (result, fields) {
//     console.log(result)
// })
const express = require('express')
const db = require('./mysql')

const server = express()


server.get('/taf/api/downloadUrl', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    let sql = 'SELECT * FROM distribute order by id desc limit 1'
    db.query(sql, function (result) {
        res.send(JSON.stringify(result));
    })
})

server.listen(8100, () => {
    console.log('server is running')
})
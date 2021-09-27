const express = require('express')
const db = require('./mysql')

const server = express()


server.get('/taf/api/downloadUrl', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    let sql = 'SELECT * FROM distribute'
    db.query(sql, function (result) {
        res.send(JSON.stringify(result));
    })
    res.send(JSON.stringify({test:1}));
})

server.listen(8100, () => {
    console.log('server is running')
})
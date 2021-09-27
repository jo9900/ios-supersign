const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 允许跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 处理http请求，解析
app.use(bodyParser.urlencoded({ extended: false }));

// 定义变量，做为返回数据
let myPost = { method: "post", age: 18, name: "lily" }
let myGet = { method: "get", age: 20, name: "Jack" }

// get 请求
app.get('/', (req, res) => {
    res.status(200);
    res.json(myGet);  // 返回处理结果
});

// post 请求
app.post('/', (req, res) => {
    console.log(req.body);  //获取参数
    res.status(200);
    res.json(myPost);  // 返回处理结果
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
const http = require('http');
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定request 事件 ，监听客户端的要求
server.on('request', function (req, res) {
    const url = req.url
    const method = req.method
    const str = `Your request url is ${url}, and requset method is ${method}`
    console.log(str);
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(str)
})

//监听端口
server.listen(8080,function () {
    console.log('server is running at http://127.0.0.1');
})
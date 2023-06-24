// 1-实现简陋路由
const http = require('http')
//创建web服务器
const server = http.createServer()

//
server.on("request",(req,res)=> {
    const url = req.url
    //设置默认的响应内容为 404 not foumd
    let content = '<h1>404 not found</h1>'
    if(url === '/' || url==='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url === "/about.html"){
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-type',"text/html; charset=utf-8")
    res.end(content)    
})

server.listen(80,()=> {
    console.log('server is starting in 127.0.0.1');
})
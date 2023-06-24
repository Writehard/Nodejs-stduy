const fs = require('fs');
// 创建一个可读流
const rs = fs.createReadStream('../Txt/file1.txt');
//创建一个可写流
const ws = fs.createWriteStream('../Txt/index.txt');
// 监听流的开启和关闭
// 这几个监听不是必须的
rs.once('open', ()=> {
    console.log('可读流打开了-');
})

rs.once('close', ()=> {
    console.log('可读流关闭');
    // 数据读取完毕，关闭可写流
    ws.end()
})

ws.once('open', function(){
    console.log("可写流打开了");
})

ws.once('close', function(){
    console.log('可写流关闭了');
})
// 要读取一个可读流中的数据，要为可读流绑定一个data事件，data事件绑定完毕自动读取数据
rs.on('data', function (data) {
    console.log(data);
    // 将读取到的数据写入可写流中
    ws.write(data)
})
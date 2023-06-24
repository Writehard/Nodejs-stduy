// 引入fs 模块
const fs = require('fs');
// fs.readFile(path, options, callback)
fs.readFile('../Txt/index.txt','utf-8',(err, data)=> {
   //err 错误信息
    if(err){
        return console.log('failed ===>' + err.message);
    }
    // data 读取的文件内容，未指定字符编码返回的是 buffer
    console.log('content=====>' + data);
})
// options
    // encoding  编码格式
    //flag 打开方式
// 复制文件内容
fs.readFile('../Txt/index.txt','utf-8',(err, data)=> {
    if(!err){
        console.log(data);
        // 写入文件
        fs.writeFile('../Txt/file1.txt',data,(err)=> {
            if(!err)console.log('写入成功');
        })
    }
 })
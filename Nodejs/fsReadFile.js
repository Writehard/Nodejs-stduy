// 引入fs 模块
const fs = require('fs');
// fs.readFile(path, options, callback)
fs.readFile('../Txt/','utf-8',(err, data)=> {
    if(err){
        return console.log('failed ===>' + err.message);
    }
    console.log('content=====>' + data);
})

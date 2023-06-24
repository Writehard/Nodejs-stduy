const path  = require('path');
const fs = require('fs');

const pathStr = path.join('a','b','c','../','/','/d','e')
fs.readFile(__dirname+'/Txt/index.txt','utf-8',function (err,data) {
    // if(!err) console.log(data);
})
const fPath = '/a/b/c/index.html'
//文件路径
let pathName = path.basename(fPath)
//文件名
const pathExit = path.basename(fPath,'.html')
//获取文件路径的拓展名
const fext = path.extname(fPath)
console.log(fext);

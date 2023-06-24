const path  = require('path');
const fs = require('fs');
fs.readFile('../Txt/file1.txt','utf-8',function (err,data) {
    try {
        console.log(data);
        fs.writeFile('../Txt/index.txt',data,function (err) {
            if(err){
                console.log(err.message);
            }
        })
    } catch (error) {
        console.log(error);
    }
})
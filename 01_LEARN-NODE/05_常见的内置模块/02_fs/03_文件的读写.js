const fs = require('fs');

// 文件写入
// const content = "你好啊，李银河";
//
// fs.writeFile('./abb.txt',content,{flag:"a"},err =>{
//     console.log(err);
// })

// 文件读取
fs.readFile("./abb.txt",{encoding:"utf-8"},(err,data)=>{
    console.log(data);
})
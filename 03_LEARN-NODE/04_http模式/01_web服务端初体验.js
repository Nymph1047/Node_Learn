const http = require('http');

// 创建一个web服务器
const server = http.createServer((req,res) =>{
    console.log("服务器中的处理函数被调用")
    res.end("Hello Server")
})

// 启动服务器 并且指定端口号和主机
server.listen(8888,'0.0.0.0',() =>{
    console.log("服务器启动成功！")
})
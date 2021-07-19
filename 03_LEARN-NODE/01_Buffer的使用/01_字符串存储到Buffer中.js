const message = "Hello";


// 不推荐 过期
// const buffer = new Buffer(message);


// 创建方式二
const buffer = Buffer.from(message)
console.log(buffer);
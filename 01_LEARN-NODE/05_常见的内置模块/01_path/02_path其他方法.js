const path = require('path');

// 获取路径信息
// const filepath = '/User/why/abc.txt';
//
// console.log(path.dirname(filepath));
// console.log(path.basename(filepath));
// console.log(path.extname(filepath));


// join路径拼接

const basepath = '../User/why';
const filename = '/abc.txt';
const othername = '/why.js';

const filepath1 = path.join(basepath,filename);
console.log(filepath1)

// resolve路径拼接
// resolve会判断拼接的路径字符串中，是否有以/或../开头的路径
const filepath2 = path.resolve(basepath,filename,othername);
console.log(filepath2);
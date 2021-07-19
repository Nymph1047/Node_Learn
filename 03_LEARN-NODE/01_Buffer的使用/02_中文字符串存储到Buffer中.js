const message = "你好啊";

// const buffer = Buffer.from(message);
// console.log(message)

// console.log(buffer.toString())

const buffer = Buffer.from(message,'utf16le');
console.log(buffer);
console.log(buffer.toString('utf16le'))
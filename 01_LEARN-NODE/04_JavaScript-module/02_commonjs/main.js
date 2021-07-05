// export {name,age,sayHello}

// Node中实现CommonJS的本质就是对象的引用赋值

// bar = {name,age,sayHello}
const bar = require('./bar');
// const { name, age, sayHello}= require('./bar');
// console.log(bar.name);
// console.log(bar.age);
// bar.sayHello("kobe");

console.log(bar.name);
console.log(bar.age);
bar.sayHello("kobe");

setTimeout(() =>{
    console.log(info.name); //coderwhy
    //11111
},2000);
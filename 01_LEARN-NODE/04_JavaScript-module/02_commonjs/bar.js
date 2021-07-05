
const  age = 18;

let message = "my name is why";

function sayHello(name){
    console.log("Hello " +  name);
}


// exports.name = name;
// exports.age = age;
// exports.sayHello = sayHello;

// 本质上是module.exports在导出
// let name = "coderwhy";
const info = {
    name:'coderwhy'
}

setTimeout(() => {
    info.name = "111111";
},1000);

module.exports = {
    info:info,
    age:123,
    sayHello:function (name){
        console.log("你好" + name);
    }
}
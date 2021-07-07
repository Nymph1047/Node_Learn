const EventEmitter = require("events");

// 创建发射器
const emitter = new EventEmitter();

emitter.on('click',(args) => {
    console.log("监听1到click事件",args);
})

const listener2 = (args) =>{
    console.log("监听2到click事件",args);
}
emitter.on('click',listener2)

// 发出一个事件
// setTimeout(() =>{
//     emitter.emit("click","coderwhy","james","kobe");
//     emitter.off("click",listener2);
//     emitter.emit("click","coderwhy","james","kobe");
// },2000);

emitter.on('tap',(args) => {
    console.log("监听3到tap事件",args);
})

// 获取注册事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount("click"));
console.log(emitter.listeners("click"));
const EventEmitter = require("events");

// 创建发射器
const emitter = new EventEmitter();

emitter.once('click',(arg1,arg2,arg3) => {
    console.log("监听1到click事件",arg1,arg2,arg3);
})

const listener2 = (arg1,arg2,arg3) =>{
    console.log("监听2到click事件",arg1,arg2,arg3);
}
emitter.on('click',listener2)

emitter.prependListener('click',(arg1,arg2,arg3) => {
    console.log("监听3到click事件",arg1,arg2,arg3);
})

emitter.on("scroll",(args) =>{
    console.log("监听到的scroll")
})
// 发出一个事件
setTimeout(() =>{
    emitter.removeAllListeners("click");
    emitter.emit("click","coderwhy","james","kobe");
    emitter.emit("click","coderwhy","james","kobe");
    emitter.emit("scroll","coderwhy","james","kobe");
},2000)
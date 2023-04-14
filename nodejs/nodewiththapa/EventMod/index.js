const EventEmitter = require('events');

const event = new EventEmitter();

event.on('checkPage',(sc, data)=>{
    console.log(`status code is ${sc} and the page is ${data}`);
});

event.emit('checkPage',200,'ok')
"use strict";
require('dotenv').config();
const PORT=process.env.PORT || 8080;
const io=require('socket.io-client');
const host= `http://localhost:${PORT}`|| "http://localhost:8080"
const client= io.connect(host);
const faker=require('faker');
const taskText = faker.lorem.sentence();
const taskNumber=faker.datatype.number();
client.emit('newTask',{msg: `Teacher : new task ---> ${taskText} number : ${taskNumber}`});

client.on('taskAddedByQ',(payload)=>
{console.log('Task added by Q hub ☑️☑️☑️');
client.disconnect();

});


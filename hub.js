"use strict";

require('dotenv').config();
const PORT =process.env.PORT || 8080;
const io = require('socket.io')(PORT);
const uuid = require('uuid').v4;

const msqQueue={
    tasks:{},
  
};

io.on("connection",(socket)=>{
    io.on('connection',socket=>{
        console.log("CONNECTED to queue-server", socket.id);
    })
socket.on('newTask',(payload)=>{
    let id =uuid();
msqQueue.tasks[id]=payload;
console.log('newTask added by teacher 📚📚📚📚',msqQueue);
socket.emit('taskAddedByQ',payload)
io.emit('newTaskByTeacher',{id:id, payload: msqQueue.tasks[id]})
})




socket.on('received',payload=>{
    console.log('received from the student and remove it from the Q ');
    delete msqQueue.tasks[payload.id];
    console.log('after deleting the task from Msg Q >>', msqQueue);

})
socket.on('get_all',()=>{
    console.log('get all the tasks for the student');
    Object.keys(msqQueue.tasks).forEach(id=>{
        socket.emit('newTaskByTeacher',{id:id, payload: msqQueue.tasks[id]})
    })
})

});


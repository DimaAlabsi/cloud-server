"use strict";
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const io = require('socket.io-client');
const host = `http://localhost:${PORT}` || "http://localhost:8080"
const student = io.connect(host);

student.emit('get_all');
student.on('newTaskByTeacher', (payload) => {
    console.log('task that added by teacher is recieved from messageQueue 📔📔📔📔', payload);
    student.emit('received',payload)
})



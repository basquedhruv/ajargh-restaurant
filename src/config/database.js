const mongoose = require('mongoose');

const connect = ()=>{
    console.log("Mongodb connection request.");
    return mongoose.connect('mongodb://localhost/project');
}

module.exports = {
    connect
}
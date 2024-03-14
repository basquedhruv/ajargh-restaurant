const mongoose = require('mongoose');

const connect = () => {
    console.log("Mongodb connection request.");
    
    return mongoose.connect('mongodb://127.0.0.1:27017/foodie');
}

module.exports = {
    connect
}

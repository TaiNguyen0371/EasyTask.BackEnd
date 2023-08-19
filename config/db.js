const mongoose = require('mongoose')

const connect = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1/EasyTask');
        console.log('Connect Successfully');
    }catch(error){
        console.log(error);
    }
}

module.exports = {connect}
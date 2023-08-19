const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
    _id: {type: ObjectId, maxLength: 255},
    name: {type: String, maxLength:255},
    description: {type: String, maxLength: 1000},
    idUser: {type: String, maxLength: 255},
    color: {type: String, maxLength: 255},
    idList: {type: String, maxLength: 255},
    updateDate: {type: Date, default: Date.now},
    index: {type: Number}
},{versionKey: false});
Task.pre('findOneAndUpdate', function(next) {
    this.set({ updateDate: new Date() });
    next();
});
  
module.exports = mongoose.model('Task',Task)
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListTask = new Schema({
    _id: {type: ObjectId, maxLength: 255},
    name: {type: String, maxLength:255},
    idWorkSpace: {type: String, maxLength: 255},
    index: {type: Number}
},{versionKey: false});

module.exports = mongoose.model('ListTask',ListTask)
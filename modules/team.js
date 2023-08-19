const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team = new Schema({
    _id: {type: ObjectId, maxLength: 255},
    idLeader: {type: String, maxLength: 255},
    idMembers: {type: Array, maxLength: 255}
},{versionKey: false});

module.exports = mongoose.model('Team',Team)
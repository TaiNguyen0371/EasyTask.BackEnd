const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Workspace = new Schema({
    _id: {type: ObjectId, maxLength: 255},
    name: {type: String, maxLength: 255},
    idTeam: {type: String, maxLength: 255}
},{versionKey: false});

module.exports = mongoose.model('Workspace',Workspace)
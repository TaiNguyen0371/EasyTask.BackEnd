const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  _id: {type: ObjectId, maxLength: 255},
  fullName: {type: String, maxLength: 255},
  userName: {type: String, maxLength: 255},
  password: {type: String, maxLength: 255}
},{versionKey: false});

module.exports = mongoose.model('User',User)
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')
const User = require('../modules/user')
const { json } = require('express')
class userController {
    index(req,res,next) {
      User.find({})
      .then(users => {
        res.json(users)
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }

    findOne(req,res,next) {
      const id = String(req.params.id)
      User.findById(id)
      .then(users => {
        res.json(users)
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }

    addOne(req,res,next) {
      const salt = bcrypt.genSaltSync(10)
      const data = req.body
      data._id = new ObjectId()
      const p = data.password
      data.password = bcrypt.hashSync(p,salt)
      User.findOne({userName: data.userName})
      .then(user=>{
        if(user) res.json({succes: false,notification: "Username existed"})
        else{
          User.create(data)
          .then(user => {
            res.json({succes: true, notification: "Added one user", user: user})
          })
          .catch(error => {
            res.json({succes: false, notification: `Error: ${error}`})
          })
        }
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }

    signIn(req,res,next) {
      const data = req.body
      User.findOne({userName: data.userName})
      .then(user=>{
        if(user){
          const checkPw = bcrypt.compareSync(data.password, user.password)
          if(checkPw) {
            res.json({succes: true, notification: "Sign in complete", user: user})
          }else{
            res.json({succes: false, notification: "Password not correct"})
          }
        }else{
          res.json({succes: false, notification: "Not found username"})
        }
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }
}

module.exports = new userController
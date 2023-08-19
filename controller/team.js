const { ObjectId } = require('mongodb')
const Team = require('../modules/team')
class teamController {
    index(req,res,next) {
      Team.find({})
      .then(teams => {
        res.json(teams)
      })
      .catch(error => {
        res.json({succes: false, notification: error})
      })
    }

    findOne(req,res,next) {
      const id = req.params.id
      Team.findById(id)
      .then(teams => {
        res.json(teams)
      })
      .catch(error => {
        res.json({succes: false, notification: error})
      })
    }

    findByIdUser(req,res,next) {
      const id = String(req.params.id)
      Team.find({'idMembers': id})
      .then(teams => res.json(teams))
      .catch(error => {
        res.json({succes: false, notification: error})
      })
    }

    addOne(req,res,next) {
      const data = req.body
      data._id = new ObjectId()
      Team.create(data)
      .then(team => {
        res.json({succes: true, notification: "Add one team", team: team})
      })
      .catch(error => {
        res.json({succes: false, notification: `Add fail: ${error}`})
      })
    }

    delete(req,res,next) {
      const id = req.params.id
      Team.findByIdAndDelete(id)
      .then(()=>{
        res.json({succes: true, notification: "Deleted team"})
      })
      .catch(error =>{
        res.json({succes: false, notification: `Delete fail: ${error}`})
      })
    }

    update(req,res,next) {
      const data = req.body
      const id = req.params.id
      Team.findByIdAndUpdate(id,data)
      .then(() => {
        res.json({succes: true, notification: "Update completed"})
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }
}

module.exports = new teamController
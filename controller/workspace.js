const { ObjectId } = require('mongodb')
const Workspace = require('../modules/workspace')
class workspaceController {
    async index(req,res,next) {
        Workspace.find({})
        .then(workspaces => {
          res.json(workspaces)
        })
        .catch(next)
    }
    async findOne(req,res,next) {
      const id = String(req.params.id)
      Workspace.findOne({'_id': id})
      .then(workspaces => {
        res.json(workspaces)
      })
      .catch(next)
    }
    async findByIdTeam(req,res,next) {
      const id = String(req.params.id)
      Workspace.find({'idTeam': id})
      .then(workspaces => res.json(workspaces))
      .catch(next)
    }

    addOne(req,res,next) {
      const data = req.body
      data._id = new ObjectId()
      Workspace.create(data)
      .then(wsp =>{
        res.json({succes: true, notification: "Add one workspace", workspace: wsp})
      })
      .catch(error => {
        res.json({succes: false, notification: `Add fail: ${error}`})
      })
    }

    delete(req,res,next) {
      const id = req.params.id
      Workspace.findByIdAndDelete(id)
      .then(()=>{
        res.json({succes: true, notification: "Deleted workspace"})
      })
      .catch(error =>{
        res.json({succes: false, notification: `Delete fail: ${error}`})
      })
    }

    update(req,res,next) {
      const data = req.body
      const id = req.params.id
      Workspace.findByIdAndUpdate(id,data)
      .then(() => {
        res.json({succes: true, notification: "Update completed"})
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }
}

module.exports = new workspaceController
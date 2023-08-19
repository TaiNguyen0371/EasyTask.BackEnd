const { ObjectId } = require('mongodb')
const ListTask = require('../modules/listTask')
const Task = require('../modules/task')
class listTaskController {
    index(req,res,next) {
      ListTask.find({})
      .then(listTasks => {
        res.json(listTasks)
      })
      .catch(error => {
        res.json({succes: false, notification: error})
      })
    }

    findOne(req,res,next) {
      const id = String(req.params.id)
      ListTask.findOne({'_id': id})
      .then(listTask => {
        res.json(listTask)
      })
      .catch(error => {
        res.json({succes: false, notification: error})
      })
    }

    findByIdWsp(req,res,next) {
        const id = String(req.params.id)
        ListTask.find({'idWorkSpace': id})
        .then(listTasks => res.json(listTasks))
        .catch(error => {
          res.json({succes: false, notification: error})
        })
    }

    addOne(req,res,next) {
      const data = req.body
      data._id = new ObjectId()
      ListTask.find()
      .then(listTasks => {
        data.index = listTasks.length
      })
      .then(() => {
        ListTask.create(data)
        .then(()=>{
          res.json({succes: true, notification: "Add one list"})
        })
        .catch(error => {
          res.json({succes: false, notification: `Add fail: ${error}`})
        })
      })
      .catch(error => {
        console.log(error);
      })
    }

    delete(req,res,next) {
      const id = req.params.id
      ListTask.findByIdAndDelete(id)
      .then(()=>{
        Task.findOneAndDelete({idList: id})
        .then(() => {
          res.json({succes: true, notification: "Deleted list"})
        })
        .catch(error => {
          console.log(error);
        })
      })
      .catch(error =>{
        res.json({succes: false, notification: `Delete fail: ${error}`})
      })
    }

    update(req,res,next) {
      const data = req.body
      const id = req.params.id
      ListTask.findByIdAndUpdate(id,data)
      .then(() => {
        res.json({succes: true, notification: "Update completed"})
      })
      .catch(error => {
        res.json({succes: false, notification: `Error: ${error}`})
      })
    }
}

module.exports = new listTaskController
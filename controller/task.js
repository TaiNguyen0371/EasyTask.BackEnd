const { ObjectId } = require("mongodb");
const Task = require("../modules/task");
class taskController {
  index(req, res, next) {
    Task.find({})
      .then((Tasks) => {
        res.json(Tasks);
      })
      .catch((error) => {
        res.json({ succes: false, notification: error });
      });
  }

  findOne(req, res, next) {
    const id = String(req.params.id);
    Task.findOne({ _id: id })
      .then((Task) => {
        res.json(Task);
      })
      .catch((error) => {
        res.json({ succes: false, notification: error });
      });
  }

  findByIdList(req, res, next) {
    const id = String(req.params.id);
    Task.find({ idList: id })
      .then((Tasks) => res.json(Tasks))
      .catch((error) => {
        res.json({ succes: false, notification: error });
      });
  }

  addOne(req, res, next) {
    const data = req.body;
    data._id = new ObjectId();
    Task.find({})
      .then((tasks) => {
        data.index = tasks.length;
      })
      .then(() => {
        Task.create(data)
          .then(() => {
            res.json({ succes: true, notification: "Add one task" });
          })
          .catch((error) => {
            res.json({ succes: false, notification: `Add fail: ${error}` });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete(req, res, next) {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
      .then(() => {
        res.json({ succes: true, notification: "Deleted task" });
      })
      .catch((error) => {
        res.json({ succes: false, notification: `Delete fail: ${error}` });
      });
  }

  update(req, res, next) {
    const data = req.body;
    const id = req.params.id;
    Task.findByIdAndUpdate(id, data)
      .then(() => {
        res.json({ succes: true, notification: "Update completed" });
      })
      .catch((error) => {
        res.json({ succes: false, notification: `Error: ${error}` });
      });
  }
}

module.exports = new taskController();

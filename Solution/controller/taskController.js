const model = require("../models/taskModel");

const getAllTasks = async (res) => {
  try {
    const data = await model.find();
    if (data.length) {
        res.json(data).status(200);
      } else {
        res.json({ message: "Tasks Not Found" }).status(404);
      }
  } catch (error) {
    console.log(error);
    res.json({ message: "Server Error" }).status(500);
  }
};

const getTaskById = async (req, res) => {
  try {
    const data = await model.find({ T_id: parseInt(req.params.id) });
    console.log(data.length);
    if (data.length) {
      res.json(data).status(200);
    } else {
      res.json({ message: "Task Not Found" }).status(404);
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Server Error" }).status(500);
  }
};

const addTask = async (req, res) => {
  try {
    const newData =await new model({
      T_id: parseInt(req.body.id),
      title: req.body.title,
      description: req.body.description,
      Status: req.body.status,
    });
    console.log(newData);
    const data = await newData.save();
    console.log(data);
    if(data){
        res.json({ data, message: "Data Added Successfully" }).status(200);
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Server Error" }).status(500);
  }
};

const updateTask = async (req, res) => {
  try {
    const data = await model.findOneAndUpdate(
      {
        T_id: parseInt(req.params.id),
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          Status: req.body.status,
        },
      },
      { new: true }
    );
    console.log(data);
    if (data) {
      res.json({ data, message: "Taskk UPdated Successfully" }).status(200);
    } else {
      res.json({ message: "Task Not Found" }).status(404);
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Server Error" }).status(500);
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedData = await model.deleteOne({
      T_id: parseInt(req.params.id),
    });
    console.log(deletedData.deletedCount);
    if (deletedData.deletedCount === 1) {
      res.json({ message: "Taskk Deleted Successfully" }).status(200);
    } else {
      res.json({ message: "Task Not Found" }).status(404);
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Server Error" }).status(500);
  }
};

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };

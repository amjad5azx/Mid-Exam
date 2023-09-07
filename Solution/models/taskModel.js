const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  T_id: {
    type: Number,
    unique:false
  },
  title: {
    type: String,
    unique:false
  },
  description: {
    type: String,
    unique:false
  },
  Status: {
    type: String,
    unique:false
  },
});

const model = new mongoose.model("taskModel", taskSchema);

module.exports = model;

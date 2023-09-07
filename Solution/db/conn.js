const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/taskDB2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

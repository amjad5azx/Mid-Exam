require("./db/conn");
const express = require("express");
const route = require("./routes/route");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", route);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

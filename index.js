const express = require("express");
const db = require("./models");
const blogRouter = require("./routes/blog");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome! to The Home");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.use("/blogs", blogRouter);

app.listen(3001, async () => {
  try {
    await db.sequelize.sync();
    console.log("connected to the server");
  } catch (error) {
    console.log(error.message);
  }
});

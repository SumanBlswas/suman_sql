const express = require("express");
const db = require("./models");
const blogRouter = require("./routes/blog");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      EndPoints: [
        { "For GET": "http://16.171.148.3:3001/blogs" },
        { "For GET with ID": "http://16.171.148.3:3001/blogs/:id" },
        { "For POST": "http://16.171.148.3:3001/blogs" },
        { "For PUT": "http://16.171.148.3:3001/blogs/:id" },
        { "For DELETE with ID": "http://16.171.148.3:3001/blogs/:id" },
      ],
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.use("/blogs", blogRouter);

app.listen(80, async () => {
  try {
    await db.sequelize.sync();
    console.log("connected to the server");
  } catch (error) {
    console.log(error.message);
  }
});

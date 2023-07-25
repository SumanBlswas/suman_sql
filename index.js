const express = require("express");
const db = require("./models");
const blogRouter = require("./routes/blog");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      EndPoints: [
        {
          "For GET":
            "http://ec2-16-171-140-201.eu-north-1.compute.amazonaws.com/blogs",
        },
        {
          "For GET with ID":
            "http://ec2-16-171-140-201.eu-north-1.compute.amazonaws.com/blogs/:id",
        },
        {
          "For POST":
            "http://ec2-16-171-140-201.eu-north-1.compute.amazonaws.com/blogs",
        },
        {
          "For PUT":
            "http://ec2-16-171-140-201.eu-north-1.compute.amazonaws.com/blogs/:id",
        },
        {
          "For DELETE with ID":
            "http://ec2-16-171-140-201.eu-north-1.compute.amazonaws.com/blogs/:id",
        },
      ],
    });
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

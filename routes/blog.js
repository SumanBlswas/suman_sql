const express = require("express");
const { blog } = require("../models");

const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  try {
    const body = await blog.findAll();
    res.status(200).send(body);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

blogRouter.get("/:id", async (req, res) => {
  try {
    const body = await blog.findOne({ where: { id: req.params.id } });
    res.status(200).send(body);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

blogRouter.post("/", async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const data = await blog.create({ title, description, author });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

blogRouter.delete("/:id", async (req, res) => {
  try {
    await blog.destroy({ where: { id: req.params.id } });
    res.status(200).send({
      message: `Data with id ${req.params.id} deleted successfully`,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

blogRouter.put("/:id", async (req, res) => {
  try {
    const data = await blog.upsert({
      id: req.params.id,
      ...req.body,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = blogRouter;

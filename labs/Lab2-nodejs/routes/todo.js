const helpers = require("../helpers/helpers.js");
const express = require("express");
const router = express.Router()



// Get all todos
router.get("/", (req, res) => {
  const result = helpers.list();
  res.json(result);
});

// Get todo by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const [todo] = helpers.getTodos(id);
  res.json(todo);
});

// Add todo
router.post("/", (req, res) => {
  const todoBody = req.body;
  helpers.add(todoBody);
  res.send("todo Added Successfully!");
});

// Edit todo
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const todoBody = req.body;
  helpers.edit(id, todoBody);
  res.send("todo Edited!");
});

// Delete todo
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  helpers.del(id);
  res.send("todo Deleted!");
});



module.exports = router;

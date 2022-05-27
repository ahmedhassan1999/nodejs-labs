const fs = require("fs");

function checkDB() {
  if (!fs.existsSync("./db.json")) {
    fs.writeFileSync("./db.json", JSON.stringify([]));
  }
}

//function return all existing todos to use it in add and edit and delete and list
function existingTodosParsed() {
  checkDB();
  const todos = fs.readFileSync("./db.json", "utf-8"); //json format needs to be barsed to js object
  if (todos) {
    return JSON.parse(todos);
  }
}

//list function
function list() {
  const todosParsed = existingTodosParsed();

  if (todosParsed.length >= 1) {
    return todosParsed;
  }
}

//get todo by id
function getTodos(id) {
  const todosParsed = existingTodosParsed();
  const todo = todosParsed.filter((todo) => {
    return todo.id == id;
  });
  return todo;
}

//delete todo
function del(id) {
  const todosParsed = existingTodosParsed();
  const todo = todosParsed.filter((todo) => {
    return todo.id != id;
  });

  fs.writeFileSync("./db.json", JSON.stringify(todo));
}

//add todo
function add(newTodo) {
  const todosParsed = existingTodosParsed();

  id = 1;

  if (todosParsed.length > 0) {
    id = todosParsed[todosParsed.length - 1].id + 1;
  }
  const todo = {
    id: id,
    title: newTodo.title,
    body: newTodo.body,
    checked: newTodo.checked,
  };

  todosParsed.push(todo);
  fs.writeFileSync("./db.json", JSON.stringify(todosParsed));
}

//edit body
function edit(todoID, new_edit) {
  const todosParsed = existingTodosParsed();
  const edited = todosParsed.map((todo) => {
    if (todo.id == todoID) {
      if (new_edit.title) {
        todo.title = new_edit.title;
      }
      if (new_edit.body) {
        todo.body = new_edit.body;
      }
      if (new_edit.checked) {
        todo.checked = new_edit.checked;
      }
    }
    return todo;
  });
  fs.writeFileSync("./db.json", JSON.stringify(edited));
}

module.exports = {
  list,
  getTodos,
  del,
  add,
  edit,
};

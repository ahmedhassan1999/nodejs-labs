const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/todo");

app.use(express.json());
app.use('/todo', userRouter)

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, (err) => {
  if (!err) {
    return console.log(`server started successfuly on port ${PORT}`);
  } else {
    console.log(`Error, port ${PORT} may be blocked try another port`);
  }
});

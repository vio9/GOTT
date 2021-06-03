const express = require("express");
const app = express();
const { reset } = require("nodemon");
const port = process.env.PORT || 4040;
const postsRouter = express.Router();
const connection = require("./db");
const charactersRouter = require("./routes/characters");
const homeRouter = require("./routes/home");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors);

app.use("/home", homeRouter);
app.use("/characters", charactersRouter);

/*homeRouter.get("/", (req, res) => {
  res.send("My Got App");
});*/

app.use("/", homeRouter);

connection.connect((err) => {
  if (err) {
    console.error("error connecting to db");
  } else {
    console.log("connected to db");
  }
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("bad happened");
  }
  console.log(`server is listening on port ${port}`);
});

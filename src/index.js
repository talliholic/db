const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cookieParser());
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)

//   const user = await User.findById("5c2e4dcb5eac678a23725b5b");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();

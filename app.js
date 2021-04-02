const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require('mongoose');

const homeStartingContent = "Using the url, tap into (url)/add to make a list or (url)/list to see the title of the tasks.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-manish:Manish2000@cluster0.3hgt2.mongodb.net/taskDB", {
  useNewUrlParser: true,useUnifiedTopology: true
});

const taskSchema = {
  name: String,
  description: String,
  creating: String,
  timerat: String
};

const Task = mongoose.model("Task", taskSchema);

app.get("/", function(req, res) {

  Task.find({}, function(err, tasks) {
    res.render("home", {
      startingContent: homeStartingContent,
      tasks: tasks
    });
  });
});

// let tasks = [];

// app.get("/", function(req,res){
//   res.render("home",{
//     startingContent: homeStartingContent,
//     tasks: tasks
//   });
// });

app.get("/add", function(req, res) {
  res.render("add");
});

app.post("/add", function(req, res) {
  const task = new Task({
    name: req.body.taskName,
    description: req.body.taskBody,
    creating: req.body.creator,
    timerat: req.body.currentTime
  });

  task.save(function(err) {
    if (!err) {
      res.redirect("/");
    }
  });
});


app.post("/delete1", function(req, res) {
  const checkedItemId = req.body.checkbox;
  Task.findByIdAndRemove(checkedItemId, function(err) {
    if (!err) {
      console.log("Successfully deleted checked task.");
      res.redirect("/");
    }
  });
});

app.post("/delete2", function(req, res) {
  const checkedItemId = req.body.checkbox;
  Task.findByIdAndRemove(checkedItemId, function(err) {
    if (!err) {
      console.log("Successfully deleted checked task.");
      res.redirect("/list");
    }
  });
});




// app.post("/add",function(req,res){
//   var task = {
//     name: req.body.taskName,
//     description: req.body.taskBody,
//     creating : req.body.creator,
//     timerat : req.body.currentTime
//   };
//   tasks.push(task);
//   res.redirect("/");
// });

app.get("/list", function(req, res) {

  Task.find({}, function(err, tasks) {
    res.render("list", {
      tasks: tasks
    });
  });
});
//
// app.get("/list", function(req,res){
//   res.render("list",{
//     tasks: tasks
//   });
// });


// Dynamic routing of the post

app.get("/tasks/:taskId", function(req, res) {

  const requestedTaskId = req.params.taskId;

  Task.findOne({
    _id: requestedTaskId
  }, function(err, task) {
    res.render("task", {
      nm: task.name,
      desc: task.description,
      creat: task.creating,
      timeat: task.timerat
    });
  });

});

// app.get("/tasks/:nameOfTasks",function(req, res){
//   var requestedTasks = _.lowerCase(req.params.nameOfTasks);
//
//   tasks.forEach(function(task){
//     const storedTask = _.lowerCase(task.name);
//
//     if(storedTask === requestedTasks){
//       res.render("task",{
//         nm : task.name,
//         desc : task.description,
//         creat: task.creating,
//         timeat: task.timerat
//       });
//     }
//   })
//
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Successfully");
});

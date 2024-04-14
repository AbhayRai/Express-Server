//importing express
const express = require("express");
const FS = require("fs");
const path = require("path");

//Port and HostName
const PORT = 4002;
const HostName = "127.0.0.3";

//app creation
const app = express();

//middleware
app.use(express.static(path.join(__dirname, "Public"))); //serves the static files to client without the processing of server
app.use(express.json()); //parse the json if present in the req

//apis
//get
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});
app.post("/newuser", (req, res) => {
  console.log(req.body); //In Express.js, req.body is a property of the request object (req) that represents the parsed body of the incoming HTTP request.
  res.status(201).send({ message: "Data Received" });
});

//app listining
app.listen(PORT, HostName, () => {
  console.log(`the server is started at http://${HostName}:${PORT}`);
});

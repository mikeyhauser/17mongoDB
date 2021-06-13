const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")
const router = require('express').Router();
// const path = require("path")

const PORT = process.env.PORT || 3000


const app = express();
app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// const apiRoutes = require('./routes/apiRoutes.js');

app.use(require('./routes/htmlRoutes.js'));
// router.use('/api', apiRoutes); cannot have router.use and router.get. must change to app.use
app.use(require('./routes/apiRoutes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

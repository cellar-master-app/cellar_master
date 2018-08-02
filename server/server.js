const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Configure middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/cellar-master";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() =>  console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

// Start the server
app.listen(PORT, function() {
    console.log("App Running on Port " + PORT + "!");
});
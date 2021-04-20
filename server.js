const express = require("express")
const routes = require("./routes")
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3001;

// Middlware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/baltimoreHappyHours", { useNewUrlParser: true, useUnifiedTopology: true, 'useFindAndModify': false });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
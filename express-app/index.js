// require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require ("mongoose");
const mongostring = `mongodb://127.0.0.1:27017/rohitdb`;

mongoose.connect(mongostring);
const database = mongoose.connection;

database.on("error", (error) => {
 console.log(error);
});

database.once("connected", () => {
    console.log("Database Connected");
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require ("./routes/routes");

app.use ("/api", routes);

app.listen(8080, () => {
    console.log(`Server started at ${8080}`);
});

module.exports = app;
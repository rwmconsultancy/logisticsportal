const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const morganBody = require("morgan-body");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const route = require("./routes/defaultroute");

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/", route);    

app.listen(port, () => {
  console.log(`Logisticsportal running on port ${port}`);
});

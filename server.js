require("dotenv").config();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

console.log("hello");

const express = require("express");

const db = require("./models");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/menu_controller");

app.use(routes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App now listening on port:", PORT);
    });
});
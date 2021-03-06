require("dotenv").config();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const express = require("express");

const session = require("express-session");

const db = require("./models");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.redirect("/pizzacutter");
})

const userRoutes = require("./controllers/user_controller");
app.use("/pizzacutter", userRoutes);

const customerRoutes = require("./controllers/customerside_controller");
app.use("/pizzacutter", customerRoutes);

const ownerRoutes = require("./controllers/ownerside_controller");
app.use("/pizzacutter/dashboard", ownerRoutes);

const menuRoutes = require("./controllers/menu_controller");
app.use("/pizzacutter/dashboard", menuRoutes);

const seedRoutes = require("./controllers/seed_controller")
app.use(seedRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync({
    force: false
}).then(function () {
    app.listen(PORT, function () {
        console.log("App now listening on port:", PORT);
    });
});
const router = require("express").Router();
const db = require("../models");


router.get("/menu", (req, res) => {
    // db.Product.findAll({
    //     include: [db.Category, db.Image]
    // }).then(data => {
    //     res.json(data)
    // })
    var hbsObject = {}
    return res.render("./customer-pages/menu", hbsObject);
});

router.get("/catering", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/catering", hbsObject);
});

router.get("/contact", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/contact", hbsObject);
});

router.get("/career", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/careers", hbsObject);
});

router.get("/login", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/login", hbsObject);
});

module.exports = router;
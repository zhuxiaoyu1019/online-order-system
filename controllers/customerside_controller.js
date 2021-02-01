const router = require("express").Router();
const db = require("../models")
// const Product = db.Product
// const Category = db.Category
// const Image = db.Image

const Product = require("../models/Product");
const Category = require("../models/Category");
const Image = require("../models/Image");


router.get("/menu", (req, res) => {
    db.Product.findAll({
        include: [db.Category, db.Image]
    }).then(data => {
        res.json(data)
    })
    // var hbsObject = {}
    // return res.render("./customer-pages/menu", hbsObject);
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

module.exports = router;
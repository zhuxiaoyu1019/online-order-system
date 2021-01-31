const router = require("express").Router();

router.get("/menu", (req, res) => {
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

module.exports = router;
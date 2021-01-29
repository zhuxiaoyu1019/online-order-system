const router = require("express").Router();

router.get("/", function (req, res) {
    var hbsObject = {}
    return res.render("index", hbsObject);
});

module.exports = router;
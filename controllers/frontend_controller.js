const router = require("express").Router();
const db = require("../models");
const Category = require("../models/Category");

router.get("/", function (req, res) {
    var hbsObject = {}
    return res.render("owner-dash-home", hbsObject);
});

router.get("/category", function (req, res) {
    db.Category.findAll().then(function (data) {
        var categoryArray = []
        data.forEach(element => {
            var item = element.toJSON()
            categoryArray.push(item)
        });
        var hbsObject = {
            categories: categoryArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/category", hbsObject);
    })

});

module.exports = router;
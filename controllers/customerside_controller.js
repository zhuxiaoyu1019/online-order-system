const router = require("express").Router();
const db = require("../models");


router.get("/contact", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/contact", hbsObject);
});

router.get("/careers", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/careers", hbsObject);
});

router.get("/login", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/login", hbsObject);
});

router.get("/about", (req, res) => {
    var hbsObject = {}
    return res.render("./customer-pages/about", hbsObject);
});

router.get("/menu", (req, res) => {
    db.Product.findAll({
        include: [db.Size, db.Category]
    }).then(function (data) {

        var productArray = []
        data.forEach(element => {

            const item = element.toJSON();
            productArray.push(item);
        });

        db.Category.findAll().then(function (data) {
            var categoryArray = []
            data.forEach(element => {
                var item = element.toJSON()
                categoryArray.push(item)
            });

            db.Size.findAll().then(function (data) {
                var sizeArray = []
                data.forEach(element => {
                    var item = element.toJSON()
                    sizeArray.push(item)
                })
                var hbsObject = {
                    categories: categoryArray,
                    products: productArray,
                    sizes: sizeArray
                }
                console.log(JSON.stringify(hbsObject, null, 2));
                return res.render("./customer-pages/menu", hbsObject);

            })

        })

    });
});


router.get("/catering", (req, res) => {
    db.Product.findAll({
        include: [db.Category]
    }).then(function (data) {
        console.log(data)
        var productArray = []
        data.forEach(element => {
            const item = element.toJSON();
            productArray.push(item);
        });

        db.Category.findAll().then(function (data) {
            var categoryArray = []
            data.forEach(element => {
                var item = element.toJSON()
                categoryArray.push(item)
            })
            var hbsObject = {
                categories: categoryArray,
                products: productArray
            }

            console.log(JSON.stringify(hbsObject, null, 2));
            return res.render("./customer-pages/catering", hbsObject);
        });
    });
});

module.exports = router;
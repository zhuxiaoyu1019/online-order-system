const router = require("express").Router();
const db = require("../models");


router.get("/menu", (req, res) => {
    db.Product.findAll({
        include: [db.Image, db.Category]
    }).then(function (data) {
        // console.log(data)
        var productArray = []
        data.forEach(element => {
            // create object and give it keys and values that handlebars is expecting and push to product array 
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
            return res.render("./customer-pages/menu", hbsObject);
        });
    })
})

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
const router = require("express").Router();
const db = require("../models");

// router.get("/", function (req, res) {
//     var hbsObject = {}
//     return res.render("owner-dash-home", hbsObject);
// });

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
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/extra", function (req, res) {
    db.Extra.findAll().then(function (data) {
        var extraArray = []
        data.forEach(element => {
            var item = element.toJSON()
            extraArray.push(item)
        });
        var hbsObject = {
            extras: extraArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/extra", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/price", function (req, res) {
    db.Price.findAll().then(function (data) {
        var priceArray = []
        data.forEach(element => {
            var item = element.toJSON()
            priceArray.push(item)
        });
        var hbsObject = {
            prices: priceArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/price", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/product", function (req, res) {
    db.Product.findAll(
        {
            include: [db.Image]
        }
    ).then(function (data) {
        console.log("data: " + JSON.stringify(data));
        var productArray = []
        data.forEach(element => {
            var item = element.toJSON();
            productArray.push(item);
        });
        var hbsObject = {
            products: productArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/product", hbsObject);
    })
});

router.get("/productAddOn", function (req, res) {
    db.ProductAddOn.findAll().then(function (data) {
        var productAddOnArray = []
        data.forEach(element => {
            var item = element.toJSON()
            productAddOnArray.push(item)
        });
        var hbsObject = {
            productAddOns: productAddOnArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/productAddOn", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/size", function (req, res) {
    db.Size.findAll().then(function (data) {
        var sizeArray = []
        data.forEach(element => {
            var item = element.toJSON()
            sizeArray.push(item)
        });
        var hbsObject = {
            sizes: sizeArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/size", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// edit this route for the owner user control panel
router.get("/user", function (req, res) {
    db.User.findAll().then(function (data) {
        var userArray = []
        data.forEach(element => {
            var item = element.toJSON()
            userArray.push(item)
        });
        var hbsObject = {
            users: userArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/user", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
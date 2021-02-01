const router = require("express").Router();
const db = require("../models");

router.get("/", function (req, res) {
    const hbsObject = {}
    return res.render("owner-dash-home", hbsObject);
});

router.get("/category", function (req, res) {
    db.Category.findAll().then(function (data) {
        const categoryArray = []
        data.forEach(element => {
            const item = element.toJSON()
            categoryArray.push(item)
        });
        const hbsObject = {
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
        const extraArray = []
        data.forEach(element => {
            const item = element.toJSON()
            extraArray.push(item)
        });
        const hbsObject = {
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
        const priceArray = []
        data.forEach(element => {
            const item = element.toJSON()
            priceArray.push(item)
        });
        const hbsObject = {
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
        const productArray = []
        data.forEach(element => {
            const item = element.toJSON();
            productArray.push(item);
        });
        const hbsObject = {
            products: productArray
        }
        return res.render("owner-dashboard-pages/product", hbsObject);
    })
});

router.get("/productAddOn", function (req, res) {
    db.ProductAddOn.findAll().then(function (data) {
        const productAddOnArray = []
        data.forEach(element => {
            const item = element.toJSON()
            productAddOnArray.push(item)
        });
        const hbsObject = {
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
        const sizeArray = []
        data.forEach(element => {
            const item = element.toJSON()
            sizeArray.push(item)
        });
        const hbsObject = {
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
        const userArray = []
        data.forEach(element => {
            const item = element.toJSON()
            userArray.push(item)
        });
        const hbsObject = {
            users: userArray
        }
        console.log(hbsObject)
        return res.render("owner-dashboard-pages/user", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
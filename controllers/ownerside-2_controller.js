const router = require("express").Router();
const db = require("../models");
const Product = db.Product;
const Category = db.Category;
const Extra = db.Extra;
const Price = db.Price;

router.get("/product", (req, res) => {
    Product.findAll().then(data => {
        const jsonData = data.map(obj => {
            const jsonObj = obj.toJSON();
            return jsonObj
        });
        return res.render("./owner-dashboard-pages/product", jsonData);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/category", (req, res) => {
    Category.findAll().then(data => {
        const jsonData = data.map(obj => {
            const jsonObj = obj.toJSON();
            return jsonObj
        });
        return res.render("./owner-dashboard-pages/category", jsonData);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/extra", (req, res) => {
    Extra.findAll().then(data => {
        const jsonData = data.map(obj => {
            const jsonObj = obj.toJSON();
            return jsonObj
        });
        return res.render("./owner-dashboard-pages/extra", jsonData);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/price", (req, res) => {
    Price.findAll().then(data => {
        const jsonData = data.map(obj => {
            const jsonObj = obj.toJSON();
            return jsonObj
        });
        return res.render("./owner-dashboard-pages/price", jsonData);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
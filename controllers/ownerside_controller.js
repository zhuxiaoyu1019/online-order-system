const router = require("express").Router();
const { diskStorage } = require("multer");
const db = require("../models");

router.get("/", function (req, res) {
    const hbsObject = {}
    return res.render("owner-dash-home", hbsObject);
});

// render category data to category page
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
        return res.render("owner-dashboard-pages/category", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// render extra data to extra items page
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
        return res.render("owner-dashboard-pages/extra", hbsObject);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// render products and categories to product page 
router.get("/product", function (req, res) {
    db.Product.findAll({
        include: [db.Category]
    }).then(function (productList) {
        const productArray = []
        productList.forEach(element => {
            const item = element.toJSON();
            productArray.push(item);
        });
        db.Category.findAll().then(function (categoryList) {
            const categoryArray = []
            categoryList.forEach(element => {
                const item = element.toJSON()
                categoryArray.push(item)
            })
            const hbsObject = {
                categories: categoryArray,
                products: productArray
            }
            return res.render("owner-dashboard-pages/product", hbsObject);
        });

    });
});

// product search render products and categories to product page 
router.get("/product/:name", function (req, res) {
    db.Product.findOne({
        where: {
            name: req.params.name
        },
        include: [db.Category]
    }).then(function (data) {
        // console.log(data)
        res.json(data)
        // var productArray = []
        // data.forEach(element => {
        //     const item = element.toJSON();
        //     productArray.push(item);
        // });
    })
});

// render categories and sizes to new product page 
router.get("/product-new", function (req, res) {
    db.Category.findAll().then(function (data) {
        var categoryArray = []
        data.forEach(element => {
            var item = element.toJSON()
            categoryArray.push(item)
        });
        const sizeList = ["piccino", "small", "medium", "large", "x_large", "smallsquare", "largesquare", "family", "full", "regular", "deluxe"];
        const sizeArr = [];
        sizeList.map(size => {
            let sizeObj = {}
            sizeObj = {
                name: size,
            }
            sizeArr.push(sizeObj);
        })
        var hbsObject = {
            categories: categoryArray,
            sizes: sizeArr
        }
        return res.render("owner-dashboard-pages/product-new", hbsObject);
    });
});

// edit product page 
router.get("/product-edit/:id", function (req, res) {
    db.Product.findOne({
        where: { id: req.params.id },
        include: [db.Category]
    }).then(function (editProduct) {
        db.Category.findAll().then(function (categoryList) {
            const categoryArray = []
            categoryList.forEach(element => {
                const item = element.toJSON()
                if (item.id !== editProduct.CategoryId) {
                    categoryArray.push(item);
                }
            });
            db.Size.findAll({ where: { ProductId: req.params.id } }).then(sizeData => {
                const existSizes = []
                const sizeWithPrice = []
                sizeData.forEach(element => {
                    const item = element.toJSON()
                    existSizes.push(item.name);
                    const size = {
                        id: item.id,
                        name: item.name,
                        price: parseInt(item.price) / 100
                    }
                    sizeWithPrice.push(size);
                });
                const sizeList = ["piccino", "small", "medium", "large", "x_large", "smallsquare", "largesquare", "family", "full", "regular", "deluxe"];
                const sizeArr = [];
                sizeList.map(size => {
                    let sizeObj = {}
                    if (existSizes.includes(size)) {
                        sizeObj = {
                            name: size,
                            price: true
                        }
                    } else {
                        sizeObj = {
                            name: size,
                            price: false
                        }
                    }
                    sizeArr.push(sizeObj);
                })
                const hbsObject = {
                    product: editProduct.toJSON(),
                    categories: categoryArray,
                    sizes: sizeArr,
                    sizeWithPrice
                };
                return res.render("owner-dashboard-pages/product-edit", hbsObject);
            });
        });
    });
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
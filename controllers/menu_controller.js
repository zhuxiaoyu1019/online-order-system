const router = require("express").Router();
const db = require("../models");
const Product = db.Product;
const Category = db.Category;
const Extra = db.Extra;
const Size = db.Size;
const ProductAddOn = db.ProductAddOn;


// CRUD functionality for owner dashboard to update the database

// product page post new
router.post("/product", (req, res) => {
    Product.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

//product page - update a product 
router.put("/product/:id", (req, res) => {
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// product page - delete a product
router.delete("/product/:id", (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});


// category page - create new category 
router.post("/category", (req, res) => {
    Category.create({
        name: req.body.name
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// category page - update category
router.put("/category", (req, res) => {
    const {
        name,
        id
    } = req.body;
    Category.update({
        name
    }, {
        where: {
            id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

//category page - delete category
router.delete("/category/:id", (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);

    });
})

// extras page - create new extra
router.post("/extra", (req, res) => {
    const {
        name,
        price
    } = req.body;
    Extra.create({
        name,
        price: price.replace(".", "") // 6.2 to 62
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// extra page - update extra item
router.put("/extra", (req, res) => {
    const {
        name,
        price,
        id
    } = req.body;
    Extra.update({
        name,
        price: price.replace(".", "")
    }, {
        where: {
            id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});


// extra page - update extra item 
router.delete("/extra/:id", (req, res) => {
    Extra.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/size/:id", (req, res) => {
    Size.findAll({ where: { ProductId: req.params.id } }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// size page - create new size
router.post("/size", (req, res) => {
    Size.create({
        name: req.body.name,
        price: parseFloat(req.body.price) * 100,
        ProductId: req.body.ProductId
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// size page - update size
router.put("/size/:id", (req, res) => {
    Size.update({
        name: req.body.name,
        price: parseFloat(req.body.price) * 100,
        ProductId: req.body.ProductId
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// size page - delete size 
router.delete("/size/:id", (req, res) => {
    Size.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// productAddon page - create productAddOn
router.post("/productAddOn", (req, res) => {
    const {
        ProductId,
        ExtraId
    } = req.body;
    ProductAddOn.create({
        ProductId,
        ExtraId
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// productAddOn page - update productAddOn
router.put("/productAddOn/:id", (req, res) => {
    const {
        ProductId,
        ExtraId
    } = req.body;
    ProductAddOn.update({
        ProductId,
        ExtraId
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// productAddOn page - delete productAddOn 
router.delete("/productAddOn/:id", (req, res) => {
    ProductAddOn.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
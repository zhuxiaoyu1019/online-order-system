const router = require("express").Router();
const db = require("../models");
const Image = db.Image;
const Product = db.Product;
const Category = db.Category;
const Extra = db.Extra;
const Price = db.Price;
const cloudinary = require("../config/cloundinary");
const upload = require("../config/multer");

router.post("/image", upload.single("image"), async (req, res) => {
    const {
        name
    } = req.body;
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        Image.create({
            name,
            secure_url: result.secure_url,
            cloundinary_id: result.public_id
        }).then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json(err);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/image", async (req, res) => {
    try {
        Image.findAll().then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json(err);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/product", (req, res) => {
    const {
        name,
        description,
        imageId,
        categoryId
    } = req.body;
    Product.create({
        name,
        description,
        imageId,
        categoryId
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/product", (req, res) => {
    Product.findAll().then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post("/category", (req, res) => {
    const {
        name,
        productId
    } = req.body;
    Category.create({
        name,
        productId
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/api/category", (req, res) => {
    Category.findAll().then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post("/extra", (req, res) => {
    const {
        name,
        price
    } = req.body
    Extra.create({
        name,
        price: price.toString().replace(".", "")
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/extra", (req, res) => {
    Extra.findAll().then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
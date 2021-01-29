const router = require("express").Router();
const db = require("../models");
const Image = db.Image;
const Product = db.Product;
const cloudinary = require("../config/cloundinary");
const upload = require("../config/multer");

router.post("/image", upload.single("image"), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        Image.create({
            name: req.body.name,
            secure_url: result.secure_url,
            cloundinary_id: result.public_id,
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
    Product.create({
        name: req.body.name,
        description: req.body.description,
        imageId: req.body.imageId,
        categoryId: req.body.categoryId,
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/product", (req, res) => {
    Product.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get("/", function (req, res) {
    var hbsObject = {}
    return res.render("index", hbsObject);
});


module.exports = router;
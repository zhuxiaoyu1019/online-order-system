const router = require("express").Router();
const db = require("../models");
const Image = db.Image;
const Product = db.Product;
const Category = db.Category;
const Extra = db.Extra;
const Price = db.Price;
const cloundinary = require("../config/cloundinary");
const upload = require("../config/multer");

router.post("/image", upload.single("image"), async (req, res) => {
    const {
        name
    } = req.body;
    try {
        const result = await cloundinary.uploader.upload(req.file.path);
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

router.put("/image", upload.single("image"), async (req, res) => {
    const { id } = req.body;
    try {
        const image = await Image.findOne({ where: { id } });
        await cloundinary.uploader.destroy(image.dataValues.cloundinary_id);
        const result = await cloundinary.uploader.upload(req.file.path);
        const newImg = {
            name: req.body.name || image.dataValues.name,
            secure_url: result.secure_url || image.dataValues.secure_url,
            cloundinary_id: result.public_id || image.dataValues.cloundinary_id
        }
        const update = await Image.update(newImg, { where: { id } });
        res.json(update);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/image", async (req, res) => {
    const { id } = req.body;
    try {
        const image = await Image.findOne({ where: { id } });
        await cloundinary.uploader.destroy(image.dataValues.cloundinary_id);
        const deleteImage = await Image.destroy({ where: { id } });
        res.json(deleteImage);
    } catch (err) {
        res.status(500).json(err);
    };
})

router.post("/product", (req, res) => {
<<<<<<< HEAD
    const {
        name,
        description,
        imageId,
        categoryId
    } = req.body;
=======
    const { name, description, ImageId, CategoryId } = req.body;
>>>>>>> development
    Product.create({
        name,
        description,
        ImageId,
        CategoryId
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.get("/product", (req, res) => {
    Product.findAll().then(data => {
=======
// router.get("/product", (req, res) => {
//     Product.findAll().then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

router.put("/product", (req, res) => {
    const { id, name, description, ImageId, CategoryId } = req.body;
    Product.update({
        name,
        description,
        ImageId,
        CategoryId
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

router.delete("/product", (req, res) => {
    const { id } = req.body;
    Product.destroy({
        where: {
            id
        }
    }).then(data => {
>>>>>>> development
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post("/category", (req, res) => {
<<<<<<< HEAD
    const {
        name,
        productId
    } = req.body;
=======
    const { name } = req.body;
>>>>>>> development
    Category.create({
        name
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.get("/api/category", (req, res) => {
    Category.findAll().then(data => {
=======
// router.get("/category", (req, res) => {
//     Category.findAll().then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

router.put("/category", (req, res) => {
    const { name, id } = req.body;
    Category.update({
        name
    }, {
        where: {
            id
        }
    }).then(data => {
>>>>>>> development
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.delete("/category", (req, res) => {
    const { id } = req.body;
    Category.destroy({
        where: {
            id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
})

router.post("/extra", (req, res) => {
<<<<<<< HEAD
    const {
        name,
        price
    } = req.body
=======
    const { name, price } = req.body;
>>>>>>> development
    Extra.create({
        name,
        price: price.replace(".", "")
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.get("/extra", (req, res) => {
    Extra.findAll().then(data => {
=======
// router.get("/extra", (req, res) => {
//     Extra.findAll().then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

router.put("/extra", (req, res) => {
    const { name, price, id } = req.body;
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

router.delete("/extra", (req, res) => {
    const { id } = req.body;
    Extra.destroy({
        where: {
            id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post("/price", (req, res) => {
    const { ProductId, SizeId, price } = req.body;
    Price.create({
        ProductId,
        SizeId,
        price: price.replace(".", "")
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// router.get("/price", (req, res) => {
//     Price.findAll().then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

router.put("/price", (req, res) => {
    const { ProductId, SizeId, price } = req.body;
    Price.update({
        price: price.replace(".", "")
    }, {
        where: {
            ProductId,
            SizeId
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.delete("/price", (req, res) => {
    const { id } = req.body;
    Price.destroy({
        where: {
            id
        }
    }).then(data => {
>>>>>>> development
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
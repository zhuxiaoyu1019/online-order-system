const router = require("express").Router();
const db = require("../models");
const Image = db.Image;
const Product = db.Product;
const Category = db.Category;
const Extra = db.Extra;
const Price = db.Price;
const Size = db.Size;
const ProductAddOn = db.ProductAddOn;
const cloundinary = require("../config/cloundinary");
const upload = require("../config/multer");


// CRUD functionality for owner dashboard to update the database

// product page - upload image 
router.post("/image", upload.single("image"), async (req, res) => {
    try {
        const result = await cloundinary.uploader.upload(req.file.path);
        Image.create({
            name: req.body.name,
            secure_url: result.secure_url,
            cloundinary_id: result.public_id
        }).then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json(err);
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// product page - get all images
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

// product page - update or change image
router.put("/image", upload.single("image"), async (req, res) => {
    const {
        id
    } = req.body;
    try {
        const image = await Image.findOne({
            where: {
                id
            }
        });
        await cloundinary.uploader.destroy(image.dataValues.cloundinary_id);
        const result = await cloundinary.uploader.upload(req.file.path);
        const newImg = {
            name: req.body.name || image.dataValues.name,
            secure_url: result.secure_url || image.dataValues.secure_url,
            cloundinary_id: result.public_id || image.dataValues.cloundinary_id
        }
        const update = await Image.update(newImg, {
            where: {
                id
            }
        });
        res.json(update);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// product page - delete image
router.delete("/image/:id", async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const image = await Image.findOne({
            where: {
                id
            }
        });
        await cloundinary.uploader.destroy(image.dataValues.cloundinary_id);
        const deleteImage = await Image.destroy({
            where: {
                id
            }
        });
        res.json(deleteImage);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get("/size/:id", (req, res) => {
    Product.findOne({ where: { id: req.params.id } }).then(data => {

    })
})

// product page post new
router.post("/product", (req, res) => {
    const {
        name,
        description,
        in_stock,
        ImageId,
        CategoryId,
        piccino,
        small,
        medium,
        large,
        x_large,
        smallsquare,
        largesqaure,
        family,
        full,
        regular,
        deluxe
    } = req.body;
    Product.create({
        name,
        description,
        in_stock,
        ImageId,
        CategoryId,
        piccino,
        small,
        medium,
        large,
        x_large,
        smallsquare,
        largesqaure,
        family,
        full,
        regular,
        deluxe
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err);
    });
});

//product page - update a product 
router.put("/product/:id", (req, res) => {
    console.log(req.body);
    // const {
    //     name,
    //     description,
    //     in_stock,
    //     ImageId,
    //     CategoryId,
    //     piccino,
    //     small,
    //     medium,
    //     large,
    //     x_large,
    //     smallsquare,
    //     largesqaure
    // } = req.body;
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

// price page - create a new price 
// router.post("/price", (req, res) => {
//     const {
//         ProductId,
//         SizeId,
//         price
//     } = req.body;
//     Price.create({
//         ProductId,
//         SizeId,
//         price: price.replace(".", "")
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

// // price page - update price 
// router.put("/price", (req, res) => {
//     const {
//         ProductId,
//         SizeId,
//         price
//     } = req.body;
//     Price.update({
//         price: price.replace(".", "")
//     }, {
//         where: {
//             ProductId,
//             SizeId
//         }
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

// // price page - delete price 
// router.delete("/price/:id", (req, res) => {
//     Price.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

// size page - create new size
// router.post("/size", (req, res) => {
//     Size.create({
//         size: req.body.size
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

// // size page - update size

// router.put("/size/:id", (req, res) => {
//     Size.update({
//         size: req.body.size
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

// // size page - delete size 
// router.delete("/size/:id", (req, res) => {
//     Size.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json(err);
//     });
// });

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
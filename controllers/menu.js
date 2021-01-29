const router = require("express").Router();
const db = require("../models");
const Image = db.Image;
const cloudinary = require("../config/cloundinary");
const upload = require("../config/multer");

router.post("/image", upload.single("image"), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        Image.create({
            name: req.body.name,
            secure_url: result.secure_url,
            cloudinary_id: result.cloudinary_id
        }).then(data => {
            res.json(data);
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/image", async (req, res) => {
    try {
        Image.findAll().then(data => {
            res.json(data);
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/", function (req, res) {
    var hbsObject = {}
    return res.render("index", hbsObject);

});

// route.post("/product", (req, res) => {

// });

module.exports = router;
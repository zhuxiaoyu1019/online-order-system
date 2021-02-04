const router = require("express").Router();
const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    if (req.session.user) {
        if (req.session.user.is_owner) {
            const hbsObject = {}
            return res.render("owner-dash-home", hbsObject);
        }
    } else {
        const hbsObject = {}
        return res.render("customer-home", hbsObject);
    }
});

router.post("/signup", (req, res) => {
    const {
        username,
        password,
        is_owner
    } = req.body
    User.create({
        username,
        password,
        is_owner
    }).then(data => {
        res.json(data);
    })
});

router.post("/login", (req, res) => {
    const {
        username,
        password
    } = req.body
    console.log(req.body)
    console.log("hannah was here")
    User.findOne({
        where: {
            username
        }
    }).then(data => {
        if (!data) {
            req.session.destroy();
        } else {
            if (bcrypt.compareSync(password, data.password)) {
                req.session.user = {
                    id: data.id,
                    username: data.username,
                    is_owner: data.is_owner
                }
                res.json(data);
            } else {
                req.session.destroy();
                res.status(401).send("You have entered an invalid username or password")
            }
        }
    })
});

router.get('/logout', (req, res) => {
    //destroy cookie
    req.session.destroy();
    res.redirect('/pizzacutter');
})

module.exports = router;
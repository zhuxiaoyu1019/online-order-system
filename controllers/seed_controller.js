const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/userdata', (req, res) => {
    db.User.findAll().then(data => {
        db.User.create({
            username: "jack-mast",
            password: "carpenter1219",
            is_owner: 1
        }).then(data => {
            res.json(data)
        })
    })
})

router.get('/seed-menu', (req, res) => {
    db.Category.findAll().then(data => {
        if (data.length) {
            return res.send("db already seeded!")
        } else {
            db.Category.bulkCreate([{
                    name: "Pizza"
                },
                {
                    name: "Submarines"
                },
                {
                    name: "Pasta"
                },
                {
                    name: "Wings"
                },
                {
                    name: "Salads"
                }
            ]).then(data => {
                db.Product.bulkCreate([{
                    name: "Pepperoni Pizza",
                    description: "tasty terrific pizza",
                    CategoryId: 1
                }, {
                    name: "Meat Feaast Pizza",
                    description: "tasty terrificer pizza",
                    CategoryId: 1
                }, {
                    name: "Italian Sub",
                    description: "soggy salty and wonderful",
                    CategoryId: 2
                }]).then(dataums => {
                    db.Size.bulkCreate([{
                        name: "Small",
                        price: 10,
                        ProductId: 1
                    }, {
                        name: "Medium",
                        price: 12,
                        ProductId: 1
                    }, {
                        name: "Large",
                        price: 14,
                        ProductId: 1
                    }, {
                        name: "Small",
                        price: 10,
                        ProductId: 2
                    }, {
                        name: "Medium",
                        price: 12,
                        ProductId: 2
                    }, {
                        name: "Large",
                        price: 14,
                        ProductId: 2
                    }, {
                        name: "Small",
                        price: 10,
                        ProductId: 3
                    }, {
                        name: "Medium",
                        price: 12,
                        ProductId: 3
                    }, {
                        name: "Large",
                        price: 14,
                        ProductId: 3
                    }])

                    res.send("seed complete!")
                })
            })
        }
    })
})

module.exports = router;
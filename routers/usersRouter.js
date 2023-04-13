const express = require("express");
const models = require("../Models");
const router = express.Router();

router.get('/', (req, res) => {
    models.User.find({}, (err, result) => {
        if (err) return err;
        res.send(result);
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params.id;
    models.User.findOne({_id: id}, (err, result) => {
        if (err) return err;
        res.send(result);
    })
});

router.post('/', (req, res) => {
    if (!req.body) res.status(400).send("Gde body?");
    const { login, password, userName } = req.body;

    const user = new models.User({login, password, userName});

    user.save();
    res.status(201).send();
});

router.post('/login', (req, res) => {
    if (!req.body) res.status(400).send("Gde body?");
    const { login, password } = req.body;

    models.User.findOne({login, password}, (err, doc) => {
        if (err) return res.send(err);

        if (doc !== null) {
            res.send(doc);
        } else {
            res.status(400).send("User not found!");
        }
    });
});

module.exports = router;
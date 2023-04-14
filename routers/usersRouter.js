const express = require("express");
const models = require("../Models");
const router = express.Router();

router.get('/', async (req, res) => {
    let users = await models.User.find({});
    users = users.map(({_id, login, userName}) => {
        return { id: _id, login, userName };
    });
    res.send(users);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let user = await models.User.findOne({_id: id});
    res.send({id: user._id, login: user.login, userName: user.userName});
});

router.post('/', (req, res) => {
    if (!req.body) res.status(400).send("Gde body?");
    const { login, password, userName } = req.body;

    const user = new models.User({login, password, userName});

    user.save();
    res.status(201).json({ok: true});
});

router.post('/login', async (req, res) => {
    if (!req.body) res.status(400).send("Gde body?");
    const { login, password } = req.body;

    const doc = await models.User.findOne({ login, password });

    if (doc) {
        res.send({ok: true, user: doc});
    } else {
        res.status(400).send({ ok: false });
    }
});

module.exports = router;
const express = require("express");
const models = require("../Models");
const router = express.Router();

router.get('/', async (req, res) => {
    let chats = await models.Chat.find({});
    res.send(chats);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let chat = await models.Chat.findOne({_id: id});
    res.send(chat);
});

router.post('/', async (req, res) => {
    if (!req.body) res.status(400).send("Gde body?");
    const { firstUserId, secondUserId } = req.body;

    const existingChat = await models.Chat.findOne({ firstUserId, secondUserId });

    if (existingChat) {
        res.send(existingChat);
    } else {
        const chat = new models.Chat({firstUserId, secondUserId});
        const createdChat = await chat.save();
        res.send(createdChat);
    }
});

module.exports = router;
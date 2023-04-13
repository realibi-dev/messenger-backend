const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: String,
    password: String,
    userName: String,
});

const ChatSchema = new Schema({
    firstUserId: String,
    secondUserId: String,
});

const MessageSchema = new Schema({
    authorId: String,
    chatId: String,
});

module.exports = {
    UserSchema,
    ChatSchema,
    MessageSchema,
}
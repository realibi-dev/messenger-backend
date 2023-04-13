const mongoose = require("mongoose");
const schemas = require("./Schemas");

let User = mongoose.model("User", schemas.UserSchema);
let Chat = mongoose.model("Chat", schemas.ChatSchema);
let Message = mongoose.model("Message", schemas.MessageSchema);

module.exports = {
    User,
    Chat,
    Message,
};
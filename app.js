const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routers/usersRouter");
const chatsRouter = require("./routers/chatsRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const CONNECTION_STRING = "mongodb+srv://admin:admin@cluster0.xao4pqd.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(CONNECTION_STRING);
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log('Server started on port ' + PORT);
    })
} catch (error) {
    console.log('Server not started ' + error);
}

app.use("/api/users", usersRouter);
app.use("/api/chats", chatsRouter);

app.listen(3000);
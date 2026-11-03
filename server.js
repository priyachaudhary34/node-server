require("dotenv").config();

const express = require("express");

const fileServer = require("./server/fileServer");
const emailSender = require("./server/emailSender");

const app = express();

fileServer(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {

    console.log(`Server running on port ${PORT}`);

    const downloadUrl =
        `${process.env.BASE_URL}/download`;

    await emailSender(downloadUrl);

});
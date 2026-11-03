const nodemailer = require("nodemailer");
const emailTemplate = require("../templates/emailTemplate");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

async function emailSender(downloadUrl) {

    try {

        const info = await transporter.sendMail({

            from: process.env.GMAIL_USER,
            to: "pc7283540@gmail.com",

            subject: "Your File is Ready for Download",

            html: emailTemplate(downloadUrl)

        });

        console.log("Email sent:", info.messageId);

    } catch (error) {

        console.error("Email failed:", error.message);

    }

}

module.exports = emailSender;
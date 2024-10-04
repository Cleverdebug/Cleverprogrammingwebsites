import nodemailer from "nodemailer";
import path from "path";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { from, to, subject, text, attachment } = req.body;

      const transporter = nodemailer.createTransport({
        host: "us2.smtp.mailhostbox.com",
        port: 587,
        secure: false,
        auth: {
          user: "sales@asktek.net",
          pass: "Ask@99559#",
        },
      });
      
      const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: text,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);

      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "An error occurred while sending email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

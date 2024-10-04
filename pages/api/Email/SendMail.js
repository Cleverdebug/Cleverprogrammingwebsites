import nodemailer from "nodemailer";
import path from "path";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "http://103.73.189.37/EmailAPi/api/Mail",
      req.body
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending email." });
  }
}

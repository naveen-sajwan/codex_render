import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,          // ✅ MUST be 587
  secure: false,      // ✅ MUST be false for port 587
  auth: {
    user: process.env.EMAIL_USERNAME,   // your gmail
    pass: process.env.EMAIL_PASSWORD,   // Gmail App Password
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000, // ✅ prevent hanging forever
});

// (Optional but useful for debugging)
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

const sendEmail = async (mailOptions) => {
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.messageId);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;

// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//  service:"gmail",
//  auth:{
//    user: process.env.EMAIL_USERNAME,
//    pass: process.env.EMAIL_PASSWORD,
//  },
// });

// const sendEmail = async(mailOptions)=>{
//  try{
//    const result = await transporter.sendMail(mailOptions);
//    console.log(result);
//    console.log("Email Sent Successfully")
//  }catch(error){
//    console.error("error Sending Email:",error);
//    throw error;
//  }
// };

// export default sendEmail;





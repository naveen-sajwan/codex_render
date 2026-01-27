// require("dotenv").config();
// const nodemailer = require("nodemailer");


// const transporter = nodemailer.createTransport({
// 	service:"gmail",
// 	auth:{
// 		user: process.env.EMAIL_USERNAME,
// 		pass: process.env.EMAIL_PASSWORD,
// 	},
// });

// const sendEmail = async(mailOptions)=>{
// 	try{
// 		const result = await transporter.sendMail(mailOptions);
// 		console.log(result);
// 		console.log("Email Sent Successfully")
// 	}catch(error){
// 		console.error("error Sending Email:",error);
// 		throw error;
// 	}
// };

// module.exports = sendEmail;


import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (mailOptions) => {
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log(result);
    console.log("Email Sent Successfully");
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;





import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
  const data = await request.json();
  let transporter = nodemailer.createTransport({
    host: "mail.vazilegal.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "mailer@vazilegal.com",
      pass: "enEk[3jpLZ_$",
    },
  });

  async function main() {
    await transporter.sendMail(
      {
        from: "mailer@vazilegal.com", // sender address
        to: "hello@vazilegal.com", // list of receivers
        subject: "Contact Us Mail", // Subject line
        text: `${JSON.stringify(data)}`, // plain text body
        html: `${JSON.stringify(data)}`,
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
  }

  main().catch(console.error);

  return NextResponse.json({
    message: "Email sent",
  });
}

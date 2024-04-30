import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
  const data = await request.json();
  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "mailer@apextradefx.live",
      pass: "Admin12345!",
    },
  });

  async function main() {
    await transporter.sendMail(
      {
        from: "mailer@apextradefx.live", // sender address
        to: "feranmi465@gmail.com", // list of receivers
        subject: "Contact-Us", // Subject line
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

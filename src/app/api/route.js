import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request) {
  const data = await request.json();
  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'test@cargoproshipments.com',
      pass: 'Sasuke465!'
    }
  });

  async function main() {
    await transporter.sendMail(
      {
        from: 'test@cargoproshipments.com', // sender address
        to: 'divofred2.0@gmail.com', // list of receivers
        subject: 'This is a mail ✔', // Subject line
        text: `${JSON.stringify(data)}`, // plain text body
        html: `${JSON.stringify(data)}`
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }
    );
  }

  main().catch(console.error);

  return NextResponse.json({
    message: 'Email sent'
  });
}

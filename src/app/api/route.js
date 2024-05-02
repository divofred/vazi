import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request) {
  const data = await request.json();
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'vazimailermailer@gmail.com',
      pass: 'jcwmeygdxzojmkse'
    }
  });
  const html = (name, email, services, howDidYouHearAboutUs, firstAttorney) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #333;
    }
    strong {
      color: #555;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Services:</strong></p>
    <ul>
      ${services.map(service => `<li>${service}</li>`).join('')}
    </ul>
    <p><strong>Are we the first attorney:</strong> ${firstAttorney}</p>
    <p><strong>How Did You Hear About Us:</strong> ${howDidYouHearAboutUs}</p>
  </div>
  </body>
  </html>`;
  };
  async function main() {
    await transporter.sendMail(
      {
        from: 'vazimailermailer@gmail.com', // sender address
        to: 'hello@vazilegal.com', // list of receivers
        subject: 'Contact-Us', // Subject line
        text: `${JSON.stringify(data)}`, // plain text body
        html: html(
          data.fullName,
          data.email,
          data.services,
          data.howDidYouHearAboutUs,
          data.firstAttorney
        )
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

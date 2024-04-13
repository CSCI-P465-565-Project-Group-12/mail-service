import express, { Request, Response } from 'express';
// import { email, password } from '../app';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export const email = process.env.MAIL_ID;
export const password = process.env.MAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});


export const sendMail =  async (mailOptions:any) => {
  console.log('mailOptions: ', email, password, mailOptions);
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true
  } catch (error) {
    console.error('Email send error in send mail: ', error);
    return false
  }
}

export const sendMailController = async (req: Request, res: Response) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: email,
    to: to,
    subject: subject,
    text: text,
  };
  const emailSent = await sendMail(mailOptions);
  if (emailSent) {
    res.status(200).send('Email sent successfully');
  } else {
    res.status(500).send('Email send error');
  }
};

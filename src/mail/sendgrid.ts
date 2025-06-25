import nodemailer from 'nodemailer'
import sgMail from '@sendgrid/mail'


export async function getMailClient() {

  sgMail.setApiKey("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");


  return sgMail
}

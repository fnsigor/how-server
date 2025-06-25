import nodemailer from 'nodemailer'

export async function getMailClient() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    },
  })

  // Verificar se a conexão está funcionando
  try {
    await transporter.verify()
    console.log('Conexão com o SendGrid estabelecida com sucesso')
  } catch (error) {
    console.error('Erro ao conectar com o SendGrid:', error)
    throw error
  }

  return transporter
}

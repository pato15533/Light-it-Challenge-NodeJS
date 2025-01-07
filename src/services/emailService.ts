import nodemailer from 'nodemailer';

export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: String(process.env.MAILTRAP_HOST),
      port: Number(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
  }

  public async sendConfirmationEmail(emailTo: string): Promise<void> {
    const message = {
      // For now, emails can only be sent inside the Mailtrap sandbox
      from: 'demomailtrap.com',
      to: emailTo,
      subject: 'Patient Creation successful',
      text: 'Thank you for registering',
    };

    try {
      await this.transporter.sendMail(message);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }
}

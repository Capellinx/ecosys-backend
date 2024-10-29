import Mail from "nodemailer/lib/mailer";
import { EmailService, IMessage } from "../../domain/services/email.service";
import nodemailer from 'nodemailer'
import { env } from "../../env";

export class NodemailerService implements EmailService {
   private transporter: Mail

   constructor(){
      this.transporter = nodemailer.createTransport({
         host: env.EMAIL_HOST,
         port: env.EMAIL_PORT,
         auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS
         }
      })
   }
   
   async send({ to, from, subject, body }: IMessage): Promise<void> {
      await this.transporter.sendMail({
         from: {
            name: from.name,
            address: from.email
         },
         to: {
            name: to.name,
            address: to.email
         },
         subject,
         html: body
      })
   }
}

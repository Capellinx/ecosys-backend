import Mail from "nodemailer/lib/mailer";
import { EmailService, IMessage } from "../../domain/services/email.service";
import nodemailer from 'nodemailer'

export class NodemailerService implements EmailService {
   private transporter: Mail

   constructor(){
      this.transporter = nodemailer.createTransport({
         host: "sandbox.smtp.mailtrap.io",
         port: 2525,
         auth: {
            user: "7648192e140a87",
            pass: "ca3f856f119287"
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

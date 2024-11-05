import { BadRequestError, NotFoundError } from "../../../config/application-errors";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { TokenService } from "../../../domain/services/token.service";
import jwt from 'jsonwebtoken';
import { InivteResetPasswordDTO } from "./invite-reset-password-dto";
import { env } from "../../../env";
import { EmailService } from "../../../domain/services/email.service";
import { template } from "../../../utils";

export class InviteResetPasswordUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private tokeService: TokenService,
      private emailService: EmailService
   ) { }

   async execute({ email }: InivteResetPasswordDTO): Promise<void> {
      const collaborator = await this.collaboratorRepository.findByEmail(email)

      if (!collaborator) throw new NotFoundError("E-mail não está cadastrado.")

      if(collaborator.first_login) throw new BadRequestError("Usuário ainda não foi aprovado.")

      const token = this.tokeService.generateToken({ id: collaborator.id })
      
      const url = `${env.FRONT_URL_DEV}/reset-password/${token}`

      await this.emailService.send({
         to: {
            name: collaborator.name,
            email: collaborator.email
         },
         from: {
            name: 'EcoSys',
            email: 'suporte@ecosys.com.br'
         },
         subject: 'Ecosys - Recuperar senha',
         body: url
      })

      return
   }
}
import { BadRequestError, NotFoundError } from "../../../config/application-errors";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { EmailService } from "../../../domain/services/email.service";
import { EncryptedPasswordService } from "../../../domain/services/encrypted-password.service";
import { GenerateRandomPass, template } from "../../../utils";

export class RejectCollaboratorUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private emailService: EmailService,
   ) { }

   async execute(id: string): Promise<void> {
      const collaborator = await this.collaboratorRepository.findById(id)

      if (!collaborator) throw new NotFoundError("Collaborator not found")

      if (collaborator.registration_status === "REJECTED") throw new BadRequestError("Collaborator already rejected")

      await Promise.all([
         await this.collaboratorRepository.reject(id),
         await this.emailService.send({
            to: {
               name: collaborator.name,
               email: collaborator.email
            },
            from: {
               name: 'EcoSys',
               email: 'suporte@ecosys.com.br'
            },
            subject: 'Ecosys - Acesso Negado',
            body: template.reject()
         })
      ])

      return 
   }
}

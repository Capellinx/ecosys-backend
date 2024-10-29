import { BadRequestError, NotFoundError } from "../../../config/application-errors";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { EmailService } from "../../../domain/services/email.service";
import { EncryptedPasswordService } from "../../../domain/services/encrypted-password.service";
import { GenerateRandomPass, template } from "../../../utils";

export class ApproveCollaboratorUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private emailService: EmailService,
      private encryptedPasswordService: EncryptedPasswordService
   ) {}

   async execute(id: string): Promise<void> {
      const collaborator = await this.collaboratorRepository.findById(id)

      if(!collaborator) throw new BadRequestError("Collaborator not found")
      
      if(collaborator.registration_status === "APPROVED") throw new NotFoundError("Collaborator already approved")

      const newPassword = GenerateRandomPass.generate()
      console.log(newPassword);
      const encryptPassword = await this.encryptedPasswordService.encrypt(newPassword)

      await Promise.all([
         await this.collaboratorRepository.approve(id),
         await this.collaboratorRepository.updatePassword(id, encryptPassword),
         await this.emailService.send({
            to: {
               name: collaborator.name,
               email: collaborator.email
            },
            from: {
               name: 'EcoSys',
               email: 'suporte@ecosys.com.br'
            },
            subject: 'Ecosys - Acesso Liberado',
            body: template.approve(newPassword)
         })
      ])

      return 
   }
} 

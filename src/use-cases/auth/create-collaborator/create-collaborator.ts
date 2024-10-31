import { ConflictError } from "../../../config/application-errors";
import { Collaborator } from "../../../domain/entities/collaborator";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { EmailService } from "../../../domain/services/email.service";
import { EncryptedPasswordService } from "../../../domain/services/encrypted-password.service";
import { GenerateRandomPass, template } from "../../../utils";
import { CreateCollaboratorDTO } from "./create-collaborator-dto";

export class CreateCollaboratorUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private encryptedPasswordService: EncryptedPasswordService,
      private emailService: EmailService
   ) { }

   async execute(payload: CreateCollaboratorDTO): Promise<void> {
      const collaborator = await this.collaboratorRepository.findByEmail(payload.email)
      if (collaborator) throw new ConflictError("Colaborador já está cadastrado")

      const icmbioCollaborator = ['ATA', 'ANALISTA']

      const password = GenerateRandomPass.generate()

      const encryptedPassword = await this.encryptedPasswordService.encrypt(password)

      if (icmbioCollaborator.includes(payload.personType)) {
        const newCollaborator = new Collaborator({
           name: payload.name,
           email: payload.email,
           matricula: payload.matricula!,
           cpf: payload.cpf,
           phone: payload.phone,
           password: encryptedPassword,
           personType: payload.personType === 'ATA' ? 'ATA' : 'ANALISTA',
           role: payload.personType === 'ATA' ? 'ATA' : 'ANALISTA',
           unity_conservation: payload.unity_conservation,
           createdAt: new Date(),
           updatedAt: new Date()
        })
        
        await Promise.all([
           await this.collaboratorRepository.create(newCollaborator),
           await this.emailService.send({
              to: {
                 name: payload.name,
                 email: payload.email
              },
              from: {
                 name: 'EcoSys',
                 email: 'suporte@ecosys.com.br'
              },
              subject: 'Ecosys - Seja bem-vindo!',
              body: template.welcome(payload.name)
           })
        ])

        return 
      }
      
      const newCollaborator = new Collaborator({
         name: payload.name,
         email: payload.email,
         cpf: payload.cpf,
         phone: payload.phone,
         password: encryptedPassword,
         personType: payload.personType === 'CONDUTOR' ? 'CONDUTOR' : 'PESQUISADOR',
         role: payload.personType === 'CONDUTOR' ? 'CONDUTOR' : 'PESQUISADOR',
         unity_conservation: payload.unity_conservation,
         createdAt: new Date(),
         updatedAt: new Date()
      })

      await Promise.all([
         await this.collaboratorRepository.create(newCollaborator),
         await this.emailService.send({
            to: {
               name: payload.name,
               email: payload.email
            },
            from: {
               name: 'EcoSys',
               email: 'suporte@ecosys.com.br'
            },
            subject: 'Ecosys - Seja bem-vindo!',
            body: template.welcome(payload.name)
         })
      ])

      return 
   }
}
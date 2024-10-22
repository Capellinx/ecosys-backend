import { ConflictError } from "../../../config/application-errors";
import { Collaborator } from "../../../domain/entities/collaborator";
import { CollaboratorRepository } from "../../../domain/repositories/collaborator-repo";
import { EncryptedPasswordService } from "../../../domain/services/encrypted-password.service";
import { GenerateRandomPass } from "../../../utils/generate-random-pass";
import { CreateCollaboratorDTO } from "./create-collaborator-dto";

export class CreateCollaboratorUseCase {
   constructor(
      private collaboratorRepository: CollaboratorRepository,
      private encryptedPasswordService: EncryptedPasswordService
   ) { }

   async execute(payload: CreateCollaboratorDTO): Promise<void> {
      const collaborator = await this.collaboratorRepository.findByEmail(payload.email)

      if (collaborator) throw new ConflictError("Collaborator already exists")

      const icmbioCollaborator = ['ATA', 'ANALISTA']

      const password = GenerateRandomPass.generate()

      const encryptedPassword = await this.encryptedPasswordService.encrypt(password)

      if (icmbioCollaborator.includes(payload.personType)) {
        const newCollaborator = new Collaborator({
           name: payload.name,
           email: payload.email,
           matricula: payload.matricula,
           cpf: payload.cpf,
           phone: payload.phone,
           password: encryptedPassword,
           personType: payload.personType,
           role: payload.personType === 'ANALISTA' ? 'ANALISTA' : 'ATA',
           createdAt: new Date(),
           updatedAt: new Date()
        })
        
        await this.collaboratorRepository.create(newCollaborator)

        return
      }
      
      const newCollaborator = new Collaborator({
         name: payload.name,
         email: payload.email,
         matricula: payload.matricula,
         cpf: payload.cpf,
         phone: payload.phone,
         password: encryptedPassword,
         personType: payload.personType,
         role: payload.personType === 'CONDUTOR' ? 'CONDUTOR' : 'PESQUISADOR',
         createdAt: new Date(),
         updatedAt: new Date()
      })

      await this.collaboratorRepository.create(newCollaborator)

      return
   }
}
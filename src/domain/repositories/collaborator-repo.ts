import { Collaborator, PersonType, Role } from "@prisma/client"
import { CreateCollaboratorDTO } from "../../use-cases/auth/create-collaborator/create-collaborator-dto"

export interface CollaboratorRepository {
   create(payload: CollaboratorRepository.CreateParams): Promise<void>
   findByEmail(email: string): Promise<Collaborator | null>
   findById(id: string): Promise<Collaborator | null>
   approve(id: string): Promise<void>
   reject(id: string): Promise<void>
   updatePassword(id: string, password: string): Promise<void>
}

export namespace CollaboratorRepository {
   export type CreateParams = {
      name: string
      email: string
      matricula?: string
      cpf: string
      phone: string
      password: string
      personType: PersonType
      role?: Role
      unity_conservation: string,
      createdAt: Date,
      updatedAt: Date
   }
}
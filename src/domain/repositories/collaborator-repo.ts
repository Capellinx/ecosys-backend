import { PersonType, Role } from "@prisma/client"
import { CreateCollaboratorDTO } from "../../use-cases/auth/create-collaborator/create-collaborator-dto"

export interface CollaboratorRepository {
   create(payload: CollaboratorRepository.CreateParams): Promise<void>
   findByEmail(email: string): Promise<boolean | null>
   findById(id: string): Promise<string | null>
   approve(id: string): Promise<void>
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
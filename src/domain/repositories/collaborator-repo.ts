import { CreateCollaboratorDTO } from "../../use-cases/auth/create-collaborator/create-collaborator-dto"

export interface CollaboratorRepository {
   create(payload: CollaboratorRepository.CreateParams): Promise<void>
   findByEmail(email: string): Promise<CreateCollaboratorDTO | null>
}

export namespace CollaboratorRepository {
   export type CreateParams = {
      name: string
      email: string
      matricula: string
      cpf: string
      phone: string
      password: string
      personType: string
      role: string
      createdAt: Date,
      updatedAt: Date
   }
}
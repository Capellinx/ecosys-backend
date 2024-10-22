import { PersonType, Role } from "@prisma/client";
import { prisma } from "../../../prisma";
import { CollaboratorRepository } from "../../domain/repositories/collaborator-repo";
import { CreateCollaboratorDTO } from "../../use-cases/auth/create-collaborator/create-collaborator-dto";


export class CollaboratorRepoDB implements CollaboratorRepository{
  async create({cpf, email, matricula, name, phone, personType, role, password ,createdAt, updatedAt}: CollaboratorRepository.CreateParams): Promise<void> {
      await prisma.collaborator.create({
         data: {
            name,
            email,
            matricula,
            cpf,
            phone,
            password,
            person_type: personType,
            role,
            createdAt,
            updatedAt
         }
      })

      return
  }

  async findByEmail(email: string): Promise<boolean | null> {
    const collaborator = await prisma.collaborator.findUnique({
      where: {
        email
      },
      select: {
        email: true
      }
    })

    if (collaborator?.email) return true

    return null
  }
}
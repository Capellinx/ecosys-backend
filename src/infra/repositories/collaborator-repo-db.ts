import { PersonType, Role } from "@prisma/client";
import { prisma } from "../../../prisma";
import { CollaboratorRepository } from "../../domain/repositories/collaborator-repo";
import { CreateCollaboratorDTO } from "../../use-cases/auth/create-collaborator/create-collaborator-dto";


export class CollaboratorRepoDB implements CollaboratorRepository{
  async create({cpf, email, matricula, name, phone, personType, role, password ,createdAt, updatedAt, unity_conservation}: CollaboratorRepository.CreateParams): Promise<void> {
      await prisma.collaborator.create({
         data: {
            name,
            email,
            matricula,
            cpf,
            phone,
            password,
            unity_conservation,
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

  async findById(id: string): Promise<string | null> {
     const collaborator = await prisma.collaborator.findUnique({
      where: {
        id
      },
      select: {
        id: true
      }
    })

    if (collaborator?.id) return collaborator.id

    return null
  }

  async approve(id: string): Promise<void> {
    await prisma.collaborator.update({
      where: {
        id
      },
      data: {
        registration_status: "APPROVED",
        updatedAt: new Date()
      }
    })

    return
  }
}
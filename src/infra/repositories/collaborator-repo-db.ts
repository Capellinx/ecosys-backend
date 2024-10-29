import { Collaborator, PersonType, Role } from "@prisma/client";
import { prisma } from "../../../prisma";
import { CollaboratorRepository } from "../../domain/repositories/collaborator-repo";
import { CreateCollaboratorDTO } from "../../use-cases/auth/create-collaborator/create-collaborator-dto";


export class CollaboratorRepoDB implements CollaboratorRepository {
  async create({ cpf, email, matricula, name, phone, personType, role, password, createdAt, updatedAt, unity_conservation }: CollaboratorRepository.CreateParams): Promise<void> {
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

  async findByEmail(email: string): Promise<Collaborator | null> {
    const collaborator = await prisma.collaborator.findUnique({
      where: {
        email
      },
    })

    if (collaborator?.email) return collaborator

    return null
  }

  async findById(id: string): Promise<Collaborator | null> {
    const collaborator = await prisma.collaborator.findUnique({
      where: {
        id
      },
    })

    if (collaborator?.id) return collaborator

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

  async updatePassword(id: string, password: string): Promise<void> {
    await prisma.collaborator.update({
      where: {
        id
      },
      data: {
        password
      }
    })

    return
  }
}
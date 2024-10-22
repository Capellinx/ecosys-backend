import { PersonType, Role } from "@prisma/client"
interface CollaboratorProps {
   name: string
   email: string
   password: string
   personType: PersonType
   cpf: string
   matricula: string
   phone: string
   createdAt: Date
   updatedAt: Date
   role: Role
}

export class Collaborator {
   public id: string
   public name: string
   public email: string
   public cpf: string
   public matricula: string
   public phone: string
   public password: string
   public personType: PersonType
   public createdAt: Date
   public updatedAt: Date
   public role: Role


   constructor(props: CollaboratorProps, id?: string) {
      this.id = id ?? crypto.randomUUID()
      this.name = props.name
      this.email = props.email
      this.cpf = props.cpf
      this.phone = props.phone
      this.password = props.password
      this.createdAt = props.createdAt
      this.personType = props.personType
      this.personType = props.personType
      this.updatedAt = props.updatedAt
      this.role = props.role
      this.matricula = props.matricula
   }
}
import { PersonType, RegistrationStatus, Role } from "@prisma/client"
import { randomUUID } from "crypto"

interface CollaboratorProps {
   name: string
   email: string
   matricula: string
   cpf: number
   phone: number
   password: string
   personType: PersonType
   role: Role
   createdAt: Date
   updatedAt: Date
}

export class Collaborator {
   private _id: string
   private _name: string
   private _email: string
   private _matricula: string
   private _cpf: number 
   private _phone: number  
   private _password: string
   private _personType: PersonType
   private _role: Role
   private _createdAt: Date
   private _updatedAt: Date

   constructor(props: CollaboratorProps, id?: string) {
      this._id = id ?? randomUUID()
      this._name = props.name
      this._email = props.email
      this._matricula = props.matricula
      this._cpf = props.cpf
      this._phone = props.phone
      this._password = props.password
      this._personType = props.personType
      this._role = props.role
      this._createdAt = props.createdAt
      this._updatedAt = props.updatedAt
   }
}
import { PersonType, RegistrationStatus, Role } from "@prisma/client"
import { randomUUID } from "crypto"

interface CollaboratorProps {
   id: string
   name: string
   email: string
   matricula: string
   cpf: string
   phone: string
   password: string
   personType: PersonType
   role: Role
   registrationStatus: RegistrationStatus
   firstLogin: boolean
   publicId: string
   createdAt: Date
   updatedAt: Date
}

export class Collaborator {
   private _id: string
   private _name: string
   private _email: string
   private _matricula: string
   private _cpf: string
   private _phone: string
   private _password: string
   private _personType: PersonType
   private _role: Role
   private _registrationStatus: RegistrationStatus
   private _firstLogin: boolean
   private _publicId: string
   private _createdAt: Date
   private _updatedAt: Date

   constructor(props: CollaboratorProps) {
      this._id = props.id ?? randomUUID()
      this._name = props.name
      this._email = props.email
      this._matricula = props.matricula
      this._cpf = props.cpf
      this._phone = props.phone
      this._password = props.password
      this._personType = props.personType
      this._role = props.role
      this._registrationStatus = props.registrationStatus
      this._firstLogin = props.firstLogin
      this._publicId = props.publicId
      this._createdAt = props.createdAt
      this._updatedAt = props.updatedAt
   }
}